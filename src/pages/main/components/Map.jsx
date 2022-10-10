import React, { useState, useEffect, useCallback, useContext } from "react";
import GlobalContext from "../../../common/context/store";
import { API } from "../../../service.js";

export const kakao = window.kakao;
var container, options, map;

const formatIssueData = (data) => {
	const issuePointList = data.data;
	const processedLocation = issuePointList.map((issuePoint) => {
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
	const [locations, setLocations] = useState([]);

	const getUserLocation = useCallback(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				setState((prev) => ({
					...prev,
					userLocation: {
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					},
				}));
			});
		} else {
			alert("GPS 켜주세요");
		}
	}, []);

	const getBoundingInfo = () => {
		const bounds = map.getBounds();
		const swLatLng = bounds.getSouthWest();
		const neLatLng = bounds.getNorthEast();

		const user = {
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

	const getIssuePoints = async (user) => {
		const { data } = await API.getFixedPointIssue({ user });

		if (!data) throw new Error("No data");
		const processedIssuePoint = formatIssueData(data);

		setLocations(processedIssuePoint);
		console.log(processedIssuePoint);
	};

	const setUserCenter = () => {
		const userLocation = new kakao.maps.LatLng(
			state.userLocation.lat,
			state.userLocation.lng
		);
		map.setCenter(userLocation);

		const user = getBoundingInfo();
		// console.log(user);
		// 4. 서버에 요청
		getIssuePoints(user);
		console.log("getIssuePoints() executed");
	};

	useEffect(() => {
		container = document.getElementById("map");
		options = {
			center: new kakao.maps.LatLng(37.454448442968726, 127.130440332797),
			level: 2,
		};
		map = new kakao.maps.Map(container, options);
	}, []);

	useEffect(() => {
		getUserLocation();
		console.log("getUserLocation() executed");
	}, [getUserLocation]);

	useEffect(() => {
		setUserCenter();
		console.log("setUserCenter() executed");
	}, [state.userLocation]);

	useEffect(() => {
		const imageSize = new kakao.maps.Size(36, 36);

		for (let i = 0; i < locations.length; i++) {
			const imageSrc = `/marker/locate${locations[i].class}.png`;

			const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

			const marker = new kakao.maps.Marker({
				map: map,
				position: locations[i].latlng, // 마커를 표시할 위치
				title: locations[i].title,
				image: markerImage,
			});

			kakao.maps.event.addListener(
				marker,
				"click",
				bottomSheetOpen(locations[i])
			);
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
				<div
					id="map"
					style={{ width: "432px", height: "940px", margin: "auto" }}
				></div>
			</div>
		</>
	);
}
