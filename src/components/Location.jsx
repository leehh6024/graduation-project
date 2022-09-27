import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const { kakao } = window;
const nowLoc = { lat: 37.454334, longitude: 127.130338 };
var container, options, map;

async function getIssuePointsAPI(){
    const res = await axios({
        method: "GET",
        url: "http://43.200.121.200:3000/",
    })

    return res.data;
}

export default function Location() {
    const [locations, setLocations] = useState([]);

    const getIssuePoints = useCallback(async () =>{
        const data = await getIssuePointsAPI();
        // console.log(data);
        if (data){
            const processedLocation = data.data.map((issuePoint) => {
                return {
                    title:issuePoint.title,
                    class:issuePoint.class,
                    latlng:new kakao.maps.LatLng(issuePoint.latitude, issuePoint.longitude),
                }
            })
            console.log(processedLocation);

            setLocations(processedLocation);
        }
    }, []);

    useEffect( () => {
        container = document.getElementById("map");
        options = {
            center: new kakao.maps.LatLng(nowLoc.lat, nowLoc.longitude),
            level: 4,
        };
        map = new kakao.maps.Map(container, options);
    }, []);

    useEffect(() => {
        getIssuePoints();
    }, [getIssuePoints]);

    useEffect(() => {
        for (var i = 0; i < locations.length; i++) {
            var marker = new kakao.maps.Marker({
                map: map,
                position: locations[i].latlng, // 마커를 표시할 위치
                title: locations[i].title,
            });
        }
    }, [locations]);

    return (
        <div>
            <div id="map" style={{ height: "700px" }}></div>
        </div>
    );
}

// 0.000001 => 10cm
/*
1. 현재 위치 받아서 변수에 저장 (서버에 보내는척 하는거임) -> (x, y)
    func(x, y) -> 반환하는 값 : 임시좌표 여러 개
2. 임시 좌표 만들어서 지도에 마크로 표시
*/