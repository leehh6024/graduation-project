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
	width: 80%;

	display: grid;
	grid-template-columns: 0.4fr 0.4fr 0.4fr;
	row-gap: 0.5rem;

	flex-direction: row;
	align-items: center;
	justify-content: left;
`;
