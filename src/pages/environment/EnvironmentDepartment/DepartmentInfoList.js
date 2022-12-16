import Recat from "react";
import styled from "styled-components";
import Info from "./Info.js";

export default function DepartmentInfoList() {
	return (
		<>
			<InfoListContainer>
				<Info
					text={`금산무주권{(||) 광역상수도 사업 전략환경영향평가서(초안) 공람 및 주민설명회 개최 공고`}
					data={`2022-10-31 | 조회수 8`}
				/>
				<Info
					text={`'2022년 통합환경관리제도 성과 조사 및 평가 연구' 입찰 공고`}
					data={`2022-10-29 | 조회수 10`}
				/>
				<Info
					text={`환경부 고문변호사 모집 공고`}
					data={`2022-10-28 | 조회수 13`}
				/>
				<Info
					text={`'물 안심공간 조성 지원을 위한연구' 입찰 공고`}
					data={`2022-10-27 | 조회수 33`}
				/>
				<Info
					text={`'중권역 물환경관리계획 수립 지침 개선 연구' 입찰 공고`}
					data={`2022-10-26 | 조회수 16`}
				/>
				<Info
					text={`'유해물질 지정 관리체계 개편을 위한 법령안 마련'입찰 재공고`}
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
