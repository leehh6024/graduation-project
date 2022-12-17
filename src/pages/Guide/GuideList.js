import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../common/context/store.js";
import { ReactComponent as UserTabBtn } from "../../assets/Hamburger.svg";
import { ReactComponent as GuideImg } from "../../assets/Guide_Information.svg";

export default function GuideList() {
	const { state, setState } = useContext(GlobalContext);
	function openUserTab() {
		setState((prev) => ({ ...prev, usertab: true }));
	}
	return (
		<>
			<GuidePageContainer>
				<GuideHeader>
					<StyledUserTabBtn onClick={openUserTab} />
					안내 가이드
				</GuideHeader>
				<GuideInfoContainer>
					<img src="/main/sideTab/guide_info.png" />
				</GuideInfoContainer>
			</GuidePageContainer>
		</>
	);
}
const GuidePageContainer = styled.div`
	position: absolute;
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);

	overflow: scroll;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: white;
	vertical-align: middle;
`;
const GuideHeader = styled.div`
	position: absolute;
	width: 100%;
	top: 6%;
	padding-bottom: 15px;
	border-bottom: 3px solid #eeeeee;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: "Pretendard";
	font-style: Bold;
	font-size: 18px;
	font-weight: 700;
	line-height: 100%;
	color: #464646;

	img {
		position: absolute;
		left: 3%;
		width: 16px;
		height: 16px;
		margin-right: 6%;
	}
`;
const StyledUserTabBtn = styled(UserTabBtn)`
	position: absolute;
	left: 4%;
	width: 18px;
`;
const GuideInfoContainer = styled.div`
	position: absolute;
	top: 12%;
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);

	overflow: scroll;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: white;
	vertical-align: middle;

	img {
		position: absolute;
		top: 10px;
		width: 100%;
		height: auto;
	}
`;
const StyledGuideImg = styled(GuideImg)`
	position: absolute;
	top: 10px;
	overflow: scroll;
	width: 100%;
	height: 310%;
`;
