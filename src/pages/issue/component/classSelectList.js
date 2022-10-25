import styled from "styled-components";
import "./contentField.css";

const CategoryList = styled.div``;

function CategorySelector({ onCategoryChange }) {
	return (
		<CategoryList>
			<select className="select-class1" type="text" onChange={onCategoryChange}>
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
			</select>
			<span>/</span>
			<select className="select-class2" type="text" onChange={onCategoryChange}>
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
			</select>
		</CategoryList>
	);
}

export default CategorySelector;
