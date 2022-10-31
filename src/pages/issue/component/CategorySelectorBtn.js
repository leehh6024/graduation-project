import React from "react";
import styled from "styled-components";

export default function CategorySelectorBtn({ activeTab, setActiveTab }) {
	return (
		<>
			<SelectCategoryBtn
				isActive={activeTab === "0"}
				onClick={() => setActiveTab("0")}
			>
				생활 <br />
				폐기물
			</SelectCategoryBtn>
			<SelectCategoryBtn
				isActive={activeTab === "1"}
				onClick={() => setActiveTab("1")}
			>
				불연성 <br />
				건설폐기물
			</SelectCategoryBtn>
			<SelectCategoryBtn
				isActive={activeTab === "2"}
				onClick={() => setActiveTab("2")}
			>
				가연성 <br />
				건설폐기물
			</SelectCategoryBtn>
			<SelectCategoryBtn
				isActive={activeTab === "3"}
				onClick={() => setActiveTab("3")}
			>
				혼합 <br />
				건설폐기물
			</SelectCategoryBtn>
			<SelectCategoryBtn
				isActive={activeTab === "4"}
				onClick={() => setActiveTab("4")}
			>
				사업장 <br />
				일반폐기물
			</SelectCategoryBtn>
		</>
	);
}

const SelectCategoryBtn = styled.div`
	background-color: ${(props) => (props.isActive ? "#6AC47A" : "#999999")};
	opacity: ${(props) => props.activeTab && 1};

	position: relative;
	height: 60%;
	padding-left: 2%;
	padding-right: 2%;

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
`;
