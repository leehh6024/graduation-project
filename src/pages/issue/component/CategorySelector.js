import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategorySelectorBtn from "./CategorySelectorBtn.js";

export default function CategorySelector({ onCategoryChange }) {
	const [activeTab, setActiveTab] = useState(false);

	return (
		<SelectCategoryContainer>
			<CategorySelectorBtn activeTab={activeTab} setActiveTab={setActiveTab} />
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
	justify-content: center;
`;
// import styled from "styled-components";
// import "./contentField.css";

// const CategoryList = styled.div``;

// function CategorySelector({ onCategoryChange }) {
// 	return (
// 		<CategoryList>
// 			<button>불연성 건설폐기물</button>
// 			<button>가연성 건설폐기물</button>
// 			<button>혼합 건설폐기물</button>
// 			<button>사업장 일반폐기물</button>
// 			<button>생활폐기물</button>
// 		</CategoryList>
// 	);
// }

// export default CategorySelector;

// Tab.js 참고해서 클릭되어져있는 상태에서 색상주는 코드 활용하기
// 위치가 다른 . .

{
	/* <select className="select-class1" type="text" onChange={onCategoryChange}>
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
}

// <SelectCategoryBtn>
// 				생활 <br />
// 				폐기물
// 			</SelectCategoryBtn>

// 			<SelectCategoryBtn>
// 				불연성 <br />
// 				건설폐기물
// 			</SelectCategoryBtn>
// 			<SelectCategoryBtn>
// 				가연성 <br />
// 				건설폐기물
// 			</SelectCategoryBtn>
// 			<SelectCategoryBtn>
// 				혼합 <br />
// 				건설폐기물
// 			</SelectCategoryBtn>

// 			<SelectCategoryBtn>
// 				사업장 <br />
// 				일반 폐기물
// 			</SelectCategoryBtn>
