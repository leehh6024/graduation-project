import styled from "styled-components";

const Content = styled.div`
	margin: auto;
	background-color: white;
`;

function ContentInputField({ onTitledChange, onBodyChange }) {
	return (
		<Content>
			<div>
				<input
					style={{
						position: "absolute",
						left: "24px",
						top: "466px",
						width: "178px",
						height: "24px",
						fontSize: "20px",
						border: "none",
						fontFamily: "Pretendard",
						fontWeight: "700",
						fontStyle: "bold",
					}}
					type="text"
					onChange={onTitledChange}
					placeholder="제목을 입력해주세요"
				></input>
			</div>
			<div>
				<textarea
					style={{
						position: "absolute",
						left: "24px",
						top: "631px",
						width: "382px",
						height: "152px",
						fontSize: "13px",
						border: "none",
						fontFamily: "Pretendard",
						fontWeight: "700",
						fontStyle: "bold",
						backgroundColor: "#F5F5F5",
					}}
					type="text"
					onChange={onBodyChange}
					placeholder="내용을 작성해주세요."
				></textarea>
			</div>
		</Content>
	);
}

export default ContentInputField;
