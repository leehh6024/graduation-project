import React, { useState, useEffect } from "react";
import Category from "./Navigation/Category.jsx";
import styled, { keyframes } from "styled-components";
import GlobalContext from "../../../common/context/store";
import { useContext } from "react";

import { ReactComponent as UserProfile } from "../../../assets/User_Profile.svg";
import { ReactComponent as MyIssue } from "../../../assets/toolbar/My_Issue.svg";
import { ReactComponent as MyPost } from "../../../assets/toolbar/My_Post.svg";
import { ReactComponent as MyBookmark } from "../../../assets/toolbar/My_Bookmark.svg";
import { ReactComponent as Settings } from "../../../assets/toolbar/Settings.svg";

export default function UserTab() {
	const { state, setState } = useContext(GlobalContext);

	const [animate, setAnimate] = useState(false);
	const [visible, setVisible] = useState(state.usertab);

	useEffect(() => {
		// open 값이 true -> false 가 되는 것을 감지 (즉, 모달창을 닫을 때)
		if (visible && !state.usertab) {
			setAnimate(true);
			setTimeout(() => setAnimate(false), 250);
		}
		setAnimate(state.usertab);
	}, [visible, state.usertab]);

	if (!animate && !visible) return null;

	function closeUserTab() {
		setState((prev) => ({ ...prev, usertab: false }));
	}

	return (
		<div>
			{state.usertab && (
				<>
					<UserTabContainer>
						<UserProfileImage>
							<UserProfile />
						</UserProfileImage>

						<UserToolbar>
							<MyIssue />
							<MyPost />
							<MyBookmark />
							<Settings />
						</UserToolbar>

						<hr
							style={{
								position: "absolute",
								width: "270px",
								top: "235px",
								border: "1px solid #f5f5f5",
							}}
						/>

						<Category />
					</UserTabContainer>
					<CloseUserTab onClick={closeUserTab} />
				</>
			)}
		</div>
	);
}

const NavContainer = styled.div`
	position: absolute;
	z-index: 0;
`;

const moveright = keyframes`
	0% {
		left: -100%;
	}
	100% {
		left: 0%;
	}
`;
// const moveleft = keyframes`
// 	0% {
// 		left: 0%;
// 	}
// 	100% {
// 		left: -100%;
// 	}
// `;
const UserTabContainer = styled.div`
	position: absolute;
	z-index: 100;
	width: 270px;
	height: 100%;
	background: white;

	animation: ${moveright} 0.4s;
`;
const UserTabContainerClose = styled.div`
	position: absolute;
	z-index: 7;
	width: 270px;
	height: 100%;
	left: 0px;
	top: 0px;
	background: white;
`;
// animation: ${moveleft} 0.4s;

const CloseUserTab = styled.div`
	position: absolute;
	z-index: 90;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.25);

	margin: auto;
	display: flex;
	align-items: top;
	justify-content: right;
`;

const UserProfileImage = styled.div`
	position: absolute;
	z-index: 7;
	width: 22%;
	height: 10%;
	transform: translate(170%, 80%);
	background: white;

	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	font-family: "Pretendard";
	font-style: bold;
	font-weight: 700;
	font-size: 18px;
	line-height: 18px;
`;

const UserToolbar = styled.div`
	position: absolute;
	z-index: 7;
	width: 100%;
	height: 43px;
	top: 162px;
	padding-top: 10px;
	padding-left: 25px;
	padding-right: 15px;

	grid-template-columns: 0.4fr 0.35fr 0.4fr 0.4fr;

	margin: auto;
	display: grid;
	align-items: center;
	justify-content: center;
`;
