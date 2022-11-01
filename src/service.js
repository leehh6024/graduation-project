import axios from "axios";

const TownCleanerAPI = axios.create({
	// baseURL: "http://43.200.121.200",
	// baseURL: "http://192.168.0.23:3001",
	// baseURL: "http://localhost:3001",
	// baseURL: "http://akdfkeks.iptime.org:3001",
	baseURL: "https://valun.kro.kr",
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		//	"ACCESS-TOKEN": getToken() ?? "",
	},
});

export const API = {
	getFixedPointIssue: async () => {
		try {
			return await TownCleanerAPI.get("/issue");
		} catch (err) {
			//console.log(err.response.data.message);
			return { success: false, message: err.response.data.message, data: null };
		}
	},

	getUserPointIssues: async (lat, lng) => {
		try {
			const { data } = await TownCleanerAPI.post("/issue", { lat, lng });
			return data;
		} catch (err) {
			//console.log(err.response.data.message);
			return { success: false, message: err.response.data.message, data: null };
		}
	},

	getPostList: async (path, inputData) => {
		try {
			const { data } = await TownCleanerAPI.get(`society/${path}`, inputData);
			return data;
		} catch (err) {
			//console.log(err.response.data.message);
			return { success: false, message: err.response.data.message, data: null };
		}
	},

	createIssue: async (inputData) => {
		try {
			const { data } = await TownCleanerAPI.post("/issue/create", inputData, {
				headers: {
					"Content-Type": "multipart/form-data",
					"Access-Control-Allow-Origin": "*",
				},
			});
			return data;
		} catch (err) {
			//console.log(err.response.data.message);
			return { success: false, message: err.response.data.message, data: null };
		}
	},

	serverLog: async () => {},
};
export async function serverLog(data) {
	return await TownCleanerAPI.get("/log", data);
}

export async function getPostList(path, data) {}
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
