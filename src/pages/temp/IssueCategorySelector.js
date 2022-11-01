import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategorySelectorBtn from "./IssueCategorySelectorBtn.js";

export default function IssueCategorySelector({ onCategoryChange }) {
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
	top: 62%;
	width: 92%;
	height: 8%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: left;
`;
