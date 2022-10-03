import React, { useState, useEffect, useCallback, useContext } from "react";
import GlobalContext from "../../../common/context/store";
import "./Map.css";
import { API } from "../../../service.js";

const { kakao } = window;
var container, options, map;

export default function Location() {
	const { setState } = useContext(GlobalContext);
	const [nowLoc, setNowLoc] = useState({ lat: 37.454334, lng: 127.130338 });
	const [locations, setLocations] = useState([]);

	// 서버와의 통신
	const getIssuePoints = useCallback(async () => {
		const { data } = await API.getFixedPointIssue();
		// console.log(data);
		if (data) {
			const { fixedIssuePointList } = data.data;
			const processedLocation = fixedIssuePointList.map((issuePoint) => {
				return {
					title: issuePoint.title,
					class: issuePoint.class,
					latlng: new kakao.maps.LatLng(issuePoint.lat, issuePoint.lng),
				};
			});
			console.log(processedLocation);
			setLocations(processedLocation);
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
	}, [locations]);
	/**
	 * getIssuePoints 는 useCallback() 을 통해 생성된 함수이므로
	 * state 가 변경되어도 재선언되지 않음
	 * 따라서 새로고침이나 접속 시에만 useEffect 가 실행됨
	 */
	useEffect(() => {
		getIssuePoints();
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
			kakao.maps.event.addListener(marker, "click", setSheetOpen);
			// kakao.maps.event.addListener(marker, "click", function () {
			// 	setLocations(locations[i]);
			// });
			// console.log(locations[i]);
		}
	}, [locations]);

	const setSheetOpen = useCallback(() => {
		setState((prev) => ({ ...prev, sheet: true }));
	});

	// useEffect(() => {
	// 	if (locations !== null) {
	// 		setSheetOpen(locations);
	// 	}
	// }, [locations]);

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
