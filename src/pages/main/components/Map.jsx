import React, {
	useState,
	useEffect,
	useCallback,
	useContext,
	useRef,
} from "react";
import GlobalContext from "../../../common/context/store";
import { API } from "../../../service.js";
import "./Map.css";

export const kakao = window.kakao;
var container, options, map;

export default function Location() {
	const { state, setState, globalRef } = useContext(GlobalContext);
	const [issueList, setIssueList] = useState([]);
	const userLocation = useRef({ lat: 0, lng: 0 });

	// 1. 지도 생성 useEffect()
	useEffect(() => {
		container = document.getElementById("map");
		options = {
			center: new kakao.maps.LatLng(37.454448442968726, 127.130440332797),
			level: 2,
		};
		map = new kakao.maps.Map(container, options);
		console.log("1. 지도를 생성하였습니다");
		setUserLatLngbyGeolocation();
	}, []);

	const setUserLatLngbyGeolocation = useCallback(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				userLocation.current.lat = position.coords.latitude;
				userLocation.current.lng = position.coords.longitude;
				console.log(
					`2. 유저의 위치를 획득하였습니다 | lat : ${userLocation.current.lat}, lng : ${userLocation.current.lng}` +
						` | 정확도 : ${position.coords.accuracy}`
				);
				setUserCenter(userLocation.current.lat, userLocation.current.lng);
				globalRef.current.userLocation.lat = userLocation.current.lat;
				globalRef.current.userLocation.lng = userLocation.current.lng;
			});
		} else {
			alert("GPS 켜주세요");
		}
	}, []);

	// 4. 이슈 리스트로 지도에 마커 표시하기
	useEffect(() => {
		const imageSize = new kakao.maps.Size(36, 36);

		for (let i = 0; i < issueList.length; i++) {
			const imageSrc = `/marker/locate${issueList[i].class}.png`;

			const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

			const marker = new kakao.maps.Marker({
				map: map,
				position: issueList[i].latlng, // 마커를 표시할 위치
				title: issueList[i].title,
				image: markerImage,
			});

			kakao.maps.event.addListener(
				marker,
				"click",
				bottomSheetOpen(issueList[i])
			);
		}
		console.log("7. 마커 표시완료");
	}, [issueList]);

	// 바텀시트
	const bottomSheetOpen = useCallback((location) => {
		return function () {
			setState((prev) => ({ ...prev, sheet: true }));
			setState((prev) => ({ ...prev, selected: [location] }));
		};
	}, []);

	// 유저 위치를 지도의 중심으로 설정하는 useEffect()
	const setUserCenter = useCallback((lat, lng) => {
		const latlngObj = new kakao.maps.LatLng(lat, lng);
		map.setCenter(latlngObj);
		console.log("4. 유저의 위치를 지도의 중심으로 설정합니다");

		getIssueList(lat, lng);
	}, []);

	const getIssueList = useCallback(async (lat, lng) => {
		console.log("5. 유저 주변의 이슈 리스트를 요청합니다");
		// const { data } = await API.getUserPointIssues(lat, lng);
		const { data } = await API.getFixedPointIssue(lat, lng);
		if (!data.success) alert("주변의 이슈가 없습니다.");
		const processedIssuePoint = formatIssueData(data);

		setIssueList(processedIssuePoint);
		console.log("6. 이슈 리스트를 state로 저장하였습니다");
	}, []);

	const formatIssueData = useCallback((data) => {
		const issuePointList = data.data;
		const processedLocation = issuePointList.map((issuePoint) => {
			return {
				title: issuePoint.title,
				class: issuePoint.class,
				latlng: new kakao.maps.LatLng(
					Number(issuePoint.issueLocation.lat),
					Number(issuePoint.issueLocation.lng)
				),
				body: issuePoint.body,
				img: issuePoint.imgUrl,
			};
		});
		return processedLocation;
	}, []);

	return (
		<>
			<div>
				<div id="map"></div>
			</div>
		</>
	);
}
