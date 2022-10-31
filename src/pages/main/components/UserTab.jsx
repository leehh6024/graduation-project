import React, { useState } from "react";
import Category from "./Navigation/Category.jsx";
import styled from "styled-components";
import GlobalContext from "../../../common/context/store";
import { useContext } from "react";

import { ReactComponent as UserProfile } from "../../../assets/User_Profile.svg";
import { ReactComponent as MyIssue } from "../../../assets/toolbar/My_Issue.svg";
import { ReactComponent as MyPost } from "../../../assets/toolbar/My_Post.svg";
import { ReactComponent as MyBookmark } from "../../../assets/toolbar/My_Bookmark.svg";
import { ReactComponent as Settings } from "../../../assets/toolbar/Settings.svg";

export default function UserTab() {
	const { state, setState } = useContext(GlobalContext);

	function closeUserTab() {
		setState((prev) => ({ ...prev, usertab: false }));
	}

	return (
		<div>
			{state && (
				<>
					<UserTabContainer>
						<UserProfileImage>
							<UserProfile />
						</UserProfileImage>

						<UserToolbar>
							<button
								style={{
									background: "white",
									border: "none",
									width: "34px",
									height: "43px",
									position: "absolute",
									left: "30px",
								}}
							>
								<MyIssue />
							</button>
							<button
								style={{
									background: "white",
									border: "none",
									width: "26px",
									height: "43px",
									position: "absolute",
									left: "84px",
								}}
							>
								<MyPost />
							</button>
							<button
								style={{
									background: "white",
									border: "none",
									width: "45px",
									height: "43px",
									position: "absolute",
									left: "130px",
								}}
							>
								<MyBookmark />
							</button>
							<button
								style={{
									background: "white",
									border: "none",
									width: "45px",
									height: "43px",
									position: "absolute",
									left: "195px",
								}}
							>
								<Settings />
							</button>
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

const UserTabContainer = styled.div`
	position: absolute;
	z-index: 7;
	width: 270px;
	height: 100%;
	left: 0px;
	top: 0px;
	background: white;
`;

const CloseUserTab = styled.div`
	position: absolute;
	z-index: 5;
	width: 100%;
	height: 100%;
	left: 270px;
	top: 0px;
	background: rgba(0, 0, 0, 0.25);
`;

const UserProfileImage = styled.div`
	position: absolute;
	z-index: 7;
	width: 18%;
	height: 10%;
	transform: translate(220%, 80%);
	background: white;

	margin: auto;
	display: block;
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
	width: 260px;
	height: 43px;
	left: 0px;
	top: 162px;
	background: white;
`;
