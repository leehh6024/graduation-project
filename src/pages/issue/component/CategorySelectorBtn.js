import React from "react";
import styled from "styled-components";

export default function CategorySelectorBtn({ activeTab, setActiveTab }) {
	return (
		<>
			<SelectCategoryBtn
				isActive={activeTab === "1"}
				onClick={() => setActiveTab("1")}
			>
				생활 폐기물
			</SelectCategoryBtn>
			<SelectCategoryBtn
				isActive={activeTab === "2"}
				onClick={() => setActiveTab("2")}
			>
				불연성 건설폐기물
			</SelectCategoryBtn>
			<SelectCategoryBtn
				isActive={activeTab === "3"}
				onClick={() => setActiveTab("3")}
			>
				가연성 건설폐기물
			</SelectCategoryBtn>
			<SelectCategoryBtn
				isActive={activeTab === "4"}
				onClick={() => setActiveTab("4")}
			>
				혼합 건설폐기물
			</SelectCategoryBtn>
			<SelectCategoryBtn
				isActive={activeTab === "5"}
				onClick={() => setActiveTab("5")}
			>
				사업장 일반폐기물
			</SelectCategoryBtn>
		</>
	);
}

const SelectCategoryBtn = styled.div`
	background-color: ${(props) => (props.isActive ? "#6AC47A" : "#e5e5e5")};
	opacity: ${(props) => props.activeTab && 1};
	color: ${(props) => (props.isActive ? "white" : "#464646")};

	position: relative;
	height: 100%;
	padding-left: 4%;
	padding-right: 4%;

	margin-right: 3%;
	border-radius: 12px;

	display: grid;
	row-gap: 0.5rem;
	align-items: center;
	justify-content: center;
	text-align: center;

	font-family: "Pretendard";
	font-style: regular;
	font-weight: 700;
	font-size: 11px;
	cursor: pointer;
`;
