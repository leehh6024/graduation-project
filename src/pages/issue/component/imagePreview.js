import styled from "styled-components";

const Preview = styled.div`
	align: center;
	background-color: inherit;
`;

export default function ImagePreview(props) {
	return (
		<Preview>
			<img style={{ width: 430, height: 250 }} src={props.src} />
		</Preview>
	);
}
