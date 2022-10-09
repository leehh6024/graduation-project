import styled from "styled-components";

const CategoryList = styled.div``;

function CategorySelector({ onCategoryChange }) {
	return (
		<CategoryList>
			<select
				style={{
					position: "absolute",
					left: "24px",
					top: "596px",
					width: "91px",
					height: "22px",
					fontSize: "13px",
					border: "none",
					fontFamily: "Pretendard",
					fontWeight: "400",
					fontStyle: "regular",
					backgroundColor: "#F5F5F5",
				}}
				type="text"
				onChange={onCategoryChange}
			>
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
			<span
				style={{
					position: "absolute",
					left: "123px",
					top: "602px",
					width: "5px",
					height: "16px",
					fontSize: "13px",
					border: "none",
					fontFamily: "Pretendard",
					fontWeight: "400",
					fontStyle: "Normal",
				}}
			>
				/
			</span>
			<select
				style={{
					position: "absolute",
					left: "136px",
					top: "596px",
					width: "91px",
					height: "22px",
					fontSize: "13px",
					border: "none",
					fontFamily: "Pretendard",
					fontWeight: "400",
					fontStyle: "regular",
					backgroundColor: "#F5F5F5",
				}}
				type="text"
				onChange={onCategoryChange}
			>
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
