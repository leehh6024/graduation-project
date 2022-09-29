import axios from "axios";

export const TownCleanerAPI = axios.create({
	baseURL: "http://43.200.121.200:3000",
	headers: {
		accept: "application/json",
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		//	"ACCESS-TOKEN": getToken() ?? "",
	},
});

export async function getFixedPointIssue() {
	return await TownCleanerAPI.get("/");
}

export async function getUserPointIssues(userPoint) {
	return await TownCleanerAPI.post("/issue", userPoint);
}
// axios.interceptors.response.use(
//   (response) => {
//     //백엔드에서 리턴 된 로그인, 또는 권한 오류가 발생하는 경우 처리
//     //문제가 있는 경우
//     // if(response.hasError) {
//     //   return;
//     // }
//     console.log(response)
//
//     //문제가 없다면
//     return response;
//   },
//   (error) => {
//     //응답 오류 처리 구분
//     console.log(error)
//
//     return Promise.reject(error);
//   },
// );

export const API = {
	getFixedPointIssue,
	getUserPointIssues,
};
