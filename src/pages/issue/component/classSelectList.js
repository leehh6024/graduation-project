import styled from "styled-components";
import "./contentField.css";

const CategoryList = styled.div``;

function CategorySelector({ onCategoryChange }) {
	return (
		<CategoryList>
			<select className="select-class1" type="text" onChange={onCategoryChange}>
				<option key={0} value={0}>
					클래스 0
				</option>
				<option key={1} value={1}>
					클래스 1
				</option>
				<option key={2} value={2}>
					클래스 2
				</option>
				<option key={3} value={3}>
					클래스 3
				</option>
			</select>
			<span>/</span>
			<select className="select-class2" type="text" onChange={onCategoryChange}>
				<option key={0} value={0}>
					클래스 0
				</option>
				<option key={1} value={1}>
					클래스 1
				</option>
				<option key={2} value={2}>
					클래스 2
				</option>
				<option key={3} value={3}>
					클래스 3
				</option>
			</select>
		</CategoryList>
	);
}

export default CategorySelector;
