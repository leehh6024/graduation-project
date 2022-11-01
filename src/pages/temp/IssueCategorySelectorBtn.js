import React from "react";
import styled from "styled-components";

export default function IssueCategorySelectorBtn({ activeTab, setActiveTab }) {
	return (
		<>
			<SelectCategoryBtn
				isActive={activeTab === "1"}
				onClick={() => setActiveTab("1")}
			>
				생활 <br />
				폐기물
			</SelectCategoryBtn>
			<SelectCategoryBtn
				isActive={activeTab === "2"}
				onClick={() => setActiveTab("2")}
			>
				불연성 <br />
				건설폐기물
			</SelectCategoryBtn>
			<SelectCategoryBtn
				isActive={activeTab === "3"}
				onClick={() => setActiveTab("3")}
			>
				가연성 <br />
				건설폐기물
			</SelectCategoryBtn>
			<SelectCategoryBtn
				isActive={activeTab === "4"}
				onClick={() => setActiveTab("4")}
			>
				혼합 <br />
				건설폐기물
			</SelectCategoryBtn>
			<SelectCategoryBtn
				isActive={activeTab === "5"}
				onClick={() => setActiveTab("5")}
			>
				사업장 <br />
				일반폐기물
			</SelectCategoryBtn>
		</>
	);
}

const SelectCategoryBtn = styled.div`
	background-color: ${(props) => (props.isActive ? "#6AC47A" : "#bbbbbb")};
	opacity: ${(props) => props.activeTab && 1};

	position: relative;
	width: 100%;
	height: auto;
	padding-left: 1%;
	padding-right: 1%;

	margin-right: 3%;
	border-radius: 10px;

	display: grid;
	align-items: center;
	justify-content: center;
	text-align: center;

	font-family: "Pretendard";
	font-style: regular;
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	color: white;
	cursor: pointer;
`;
