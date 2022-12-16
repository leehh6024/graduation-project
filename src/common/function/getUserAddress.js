import { geocoder, kakao } from "../context/store";

export function getUserAddress(lat, lng, depth) {
	return new Promise((resolve, reject) => {
		const coords = new kakao.maps.LatLng(lat, lng);
		geocoder.coord2RegionCode(
			coords.getLng(),
			coords.getLat(),
			(result, status) => {
				let data;
				if (depth >= 3) {
					data =
						result[0].region_1depth_name +
						" " +
						result[0].region_2depth_name +
						" " +
						result[0].region_3depth_name;
				}
				if (depth >= 4) {
					data += " " + result[0].region_4depth_name;
				}
				// if (depth >= 5) {
				// 	data += " " + result[0].region_5depth_name;
				// }

				resolve(data);
			}
		);
	});
}

export function getUserAddressByKakaoLatLng(LatLngObject, depth) {
	return new Promise((resolve, reject) => {
		geocoder.coord2RegionCode(
			LatLngObject.getLng(),
			LatLngObject.getLat(),
			(result, status) => {
				let data;
				if (depth >= 3) {
					data =
						result[0].region_1depth_name +
						" " +
						result[0].region_2depth_name +
						" " +
						result[0].region_3depth_name;
				}
				if (depth >= 4) {
					data += " " + result[0].region_4depth_name;
				}
				// if (depth >= 5) {
				// 	data += " " + result[0].region_5depth_name;
				// }

				resolve(data);
			}
		);
	});
}

// Pending
