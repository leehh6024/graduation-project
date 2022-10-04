import React, { useState, useEffect, useCallback, useContext } from "react";
import GlobalContext from "../../../common/context/store";
import "./Map.css";
import { API } from "../../../service.js";
import axios from "axios";

const { kakao } = window;
var container, options, map;

function getInfo() {
	// var center = map.getCenter();
	// var level = map.getLevel();
	// var mapTypeId = map.getMapTypeId();
	var bounds = map.getBounds();
	var swLatLng = bounds.getSouthWest();
	var neLatLng = bounds.getNorthEast();
	console.log(swLatLng);
	console.log(neLatLng);

	const User = {
		southWest: {
			lat: swLatLng.La,
			lng: swLatLng.Ma,
		},
		northEast: {
			lat: neLatLng.La,
			lng: neLatLng.Ma,
		},
	};
	console.log(User);
}

const processedIssuePoint = (data) => {
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
	const [nowLoc, setNowLoc] = useState({ lat: 37.454334, lng: 127.130338 });
	const [locations, setLocations] = useState([]);

	// 서버와의 통신
	const getIssuePoints = useCallback(async () => {
		const { data } = await API.getUserPointIssues(User);
		// console.log(data);

		if (data) {
			const processedLocation = processedIssuePoint(data);
			setLocations(processedLocation);
		}

		const { data } = await API.getUserPointIssues();
		if (data) {
			const { userIssuePointList } = data.data;
			const processedBound = userIssuePointList.map((boundPoint) => {
				return {
					User: {
						southWest: {
							lat: Number(boundPoint.body.user.southWest.lat),
							lng: Number(boundPoint.body.user.southWest.lng),
						},
						northEast: {
							lat: Number(boundPoint.body.user.northEast.lat),
							lng: Number(boundPoint.body.user.northEast.lng),
						},
					},
				};
			});
			// console.log(processedBound);
		}
	}, []);

	// 맵 생성 및 기준점 초기화
	useEffect(() => {
		container = document.getElementById("map");
		options = {
			center: new kakao.maps.LatLng(nowLoc.lat, nowLoc.lng),
			level: 2,
		};
		map = new kakao.maps.Map(container, options);
	}, []);

	// user currentlocation

	const currentLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				var lat = position.coords.latitude,
					lng = position.coords.longitude;

				var locPosition = new kakao.maps.LatLng(lat, lng);

				displayMarker(locPosition);
				getInfo();
			});
		} else {
			var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);

			displayMarker(locPosition);
		}
	};

	function displayMarker(locPosition) {
		var marker = new kakao.maps.Marker({
			map: map,
			position: locPosition,
		});

		var iwRemoveable = true;

		var infoWindow = new kakao.maps.InfoWindow({
			removable: iwRemoveable,
		});

		infoWindow.open(map, marker);

		map.setCenter(locPosition);
	}
	/**
	 * getIssuePoints 는 useCallback() 을 통해 생성된 함수이므로
	 * state 가 변경되어도 재선언되지 않음
	 * 따라서 새로고침이나 접속 시에만 useEffect 가 실행됨
	 */
	useEffect(() => {
		getIssuePoints();
		currentLocation();
	}, [getIssuePoints]);
	/**
	 * locations 는 state 변수이므로, 값이 변경될 때(서버에서 데이터를 받아올 때)
	 * 마다 리액트가 화면을 렌더링함. useEffect 가 locations 를 참조하고 있으므로
	 * locations 이 갱신될 때 마다 지도에 마커를 표시함
	 */
	useEffect(() => {
		for (var i = 0; i < locations.length; i++) {
			var marker = new kakao.maps.Marker({
				map: map,
				position: locations[i].latlng, // 마커를 표시할 위치
				title: locations[i].title,
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
