import styled from "styled-components";

const Content = styled.div`
	margin: auto;
	background-color: white;
`;

function ContentInputField({ onTitledChange, onBodyChange }) {
	return (
		<Content>
			<div>
				제목
				<input type="text" onChange={onTitledChange}></input>
			</div>
			<div>
				내용
				<input type="text" onChange={onBodyChange}></input>
			</div>
		</Content>
	);
}

export default ContentInputField;
