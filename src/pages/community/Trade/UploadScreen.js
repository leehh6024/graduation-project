import React from "react";
import GlobalContext from "../../../common/context/store";
import { useContext } from "react";

export default function UploadScreen() {
	const { state, setState } = useContext(GlobalContext);

	const RegisterSuccess = () => {
		// 성공적으로 등록한 창 띄워주기 이후에 메인으로 화면전환
	};
	const RegisterFailed = () => {
		// 성공적으로 등록하지못한 창 띄워주기 이후에 메인으로 화면전환
	};

	return (
		<div>
			{state.uploadScreen && (
				<button onClick={closeUploadScreen}>뒤로가기버튼</button>
			)}
		</div>
	);
}
