import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategorySelectorBtn from "./CategorySelectorBtn.js";

export default function CategorySelector({ onCategoryChange }) {
	const [activeTab, setActiveTab] = useState(false);

	return (
		<SelectCategoryContainer>
			<CategorySelectorBtn
				onChange={onCategoryChange}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
		</SelectCategoryContainer>
	);
}
const SelectCategoryContainer = styled.div`
	position: absolute;
	left: 4%;
	top: 62%;
	width: 92%;
	height: 8%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: left;
`;
