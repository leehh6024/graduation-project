import Recat from "react";
import styled from "styled-components";
import Info from "./Info.js";

export default function SystemInfoList() {
	return (
		<>
			<InfoListContainer>
				<Info
					text={`KBCSD 리더스 포럼: 제4회 SustainableBusiness Innovation Forum 참석 안내`}
					data={`2022-10-31 | 조회수 8`}
				/>
				<Info
					text={`『2022년 녹색금융 우수기업 시상 공모 안내』`}
					data={`2022-10-29 | 조회수 10`}
				/>
				<Info
					text={`★★2022년 환경정보 추가 공개대상 안내 및 환경정보 입력 안내★★`}
					data={`2022-10-28 | 조회수 13`}
				/>
				<Info
					text={`『2022년 우수환경산업체 모집 공고』`}
					data={`2022-10-27 | 조회수 33`}
				/>
			</InfoListContainer>
		</>
	);
}

const InfoListContainer = styled.div`
	position: absolute;
	top: 24%;
	width: 100%;
	height: 100%;
	overflow: scroll;
`;
