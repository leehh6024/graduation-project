import styled from "styled-components";

const Preview = styled.div`
	align: center;
	background-color: inherit;
	margin: auto;
`;

export default function ImagePreview(props) {
	return (
		<Preview>
			<img style={{ width: 430, height: 430 }} src={props.src} />
		</Preview>
	);
}
