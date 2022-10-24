import styled from "styled-components";

const Preview = styled.div`
	background-color: inherit;
`;

export default function UploadPreview(props) {
	return (
		<UploadPreview>
			<img src={props.src} style={{ width: "100%", height: "42vh" }} />
		</UploadPreview>
	);
}
