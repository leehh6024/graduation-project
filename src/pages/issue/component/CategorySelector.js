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

/* <select className="select-class1" type="text" >
				<option key={0} value={0}>
					생활 폐기물
				</option>
				<option key={1} value={1}>
					불연성 건설폐기물
				</option>
				<option key={2} value={2}>
					가연성 건설폐기물
				</option>
				<option key={3} value={3}>
					혼합 건설폐기물
				</option>
				<option key={4} value={4}>
					사업장 일반 폐기물
				</option>
			</select> */
