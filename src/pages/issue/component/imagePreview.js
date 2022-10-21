import styled from "styled-components";

const Preview = styled.div`
	background-color: inherit;
`;

export default function ImagePreview(props) {
	return (
		<Preview>
			<img src={props.src} style={{ width: "98%", height: "42vh" }} />
		</Preview>
	);
}
