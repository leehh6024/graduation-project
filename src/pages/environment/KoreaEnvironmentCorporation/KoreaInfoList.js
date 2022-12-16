import Recat from "react";
import styled from "styled-components";
import Info from "./Info.js";

export default function KoreaInfoList() {
	return (
		<>
			<InfoListContainer>
				<Info
					text={`청정수소 생산시설 설치사업 수요조사 안내`}
					data={`2022-10-31 | 조회수 8`}
				/>
				<Info
					text={`2022 물기술 사업화를 위한 미니클러스터형 프로젝트랩 사업 3차 공고`}
					data={`2022-10-29 | 조회수 10`}
				/>
				<Info
					text={`제천시 장락동 및 고암동 도시침수예방사업 안전점검 수행기관 선정 지정 공고`}
					data={`2022-10-28 | 조회수 13`}
				/>
				<Info
					text={`2022 물산업 스타트업 챌린지 공고`}
					data={`2022-10-27 | 조회수 33`}
				/>
				<Info
					text={`2022년 개인정보 보호의 날 홍보 캠페인 실시`}
					data={`2022-10-26 | 조회수 16`}
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
