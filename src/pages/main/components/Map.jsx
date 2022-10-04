import React, { useState, useEffect, useCallback, useContext } from "react";
import GlobalContext from "../../../common/context/store";
import "./Map.css";
import { API } from "../../../service.js";
import axios from "axios";

const { kakao } = window;
var container, options, map;

const formatIssueData = (data) => {
	const { fixedIssuePointList } = data.data;
	// console.log(fixedIssuePointList);
	const processedLocation = fixedIssuePointList.map((issuePoint) => {
		return {
			title: issuePoint.title,
			class: issuePoint.class,
			latlng: new kakao.maps.LatLng(
				Number(issuePoint.location.lat),
				Number(issuePoint.location.lng)
			),
			body: issuePoint.body,
			img: issuePoint.img,
		};
	});
	return processedLocation;
};

export default function Location() {
	const { state, setState } = useContext(GlobalContext);
	const [userLoc, setUserLoc] = useState({ lat: null, lng: null });
	const [locations, setLocations] = useState([]);

	const getUserLocation = useCallback(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				setUserLoc({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
			});
			//console.log(userLoc);
		} else {
			alert("GPS 켜주세요");
		}
	}, []);

	const getBoundingInfo = () => {
		let bounds = map.getBounds();
		let swLatLng = bounds.getSouthWest();
		let neLatLng = bounds.getNorthEast();
		// console.log(swLatLng);
		// console.log(neLatLng);

		let user = {
			southWest: {
				lat: swLatLng.La,
				lng: swLatLng.Ma,
			},
			northEast: {
				lat: neLatLng.La,
				lng: neLatLng.Ma,
			},
		};
		return user;
	};

	const getIssuePoints = async () => {
		const { data } = await API.getFixedPointIssue();

		if (!data) throw new Error("No data");
		const processedIssuePoint = formatIssueData(data);

		setLocations(processedIssuePoint);
	};

	const setUserCenter = () => {
		const userLocation = new kakao.maps.LatLng(userLoc.lat, userLoc.lng);
		map.setCenter(userLocation);
	};

	useEffect(() => {
		container = document.getElementById("map");
		options = {
			center: new kakao.maps.LatLng(37.454448442968726, 127.130440332797),
			level: 2,
		};
		map = new kakao.maps.Map(container, options);
		// let userPositionObj = new kakao.maps.LatLng(userLoc.lat, userLoc.lng);

		// let marker = new kakao.maps.Marker({
		// 	map: map,
		// 	position: userPositionObj,
		// });

		// let iwRemoveable = true;

		// let infoWindow = new kakao.maps.InfoWindow({
		// 	removable: iwRemoveable,
		// });

		// infoWindow.open(map, marker);

		// map.setCenter(userPositionObj);
	}, []);

	// 맵 생성 및 기준점 초기화
	useEffect(() => {
		// 1. 유저 위치 획득 및 state 설정
		getUserLocation();
		console.log("getUserLocation() executed");
	}, [getUserLocation]);

	useEffect(() => {
		setUserCenter();
		console.log("setUserCenter() executed");
	}, [userLoc]);

	useEffect(() => {
		// 3. 유저 위치를 중심좌표로 설정 및 SW, NE 데이터 획득
		const user = getBoundingInfo();
		console.log(user);
		// 4. 서버에 요청
		getIssuePoints();
		console.log("getIssuePoints() executed");
		// const { data } = API.getUserPointIssues({ user });
	}, [userLoc]);

	/**
	 * getIssuePoints 는 useCallback() 을 통해 생성된 함수이므로
	 * state 가 변경되어도 재선언되지 않음
	 * 따라서 새로고침이나 접속 시에만 useEffect 가 실행됨
	 */

	useEffect(() => {
		for (var i = 0; i < locations.length; i++) {
			var marker = new kakao.maps.Marker({
				map: map,
				position: locations[i].latlng, // 마커를 표시할 위치
				title: locations[i].title,
			});
			kakao.maps.event.addListener(marker, "click", bottomSheetOpen(locations[i]));
		}
	}, [locations]);

	function bottomSheetOpen(location) {
		return function () {
			setState((prev) => ({ ...prev, sheet: true }));
			setState((prev) => ({ ...prev, selected: [location] }));
		};
	}

	return (
		<>
			<div>
				<div id="map" style={{ width: "432px", height: "940px", margin: "auto" }}></div>
			</div>
		</>
	);
}
