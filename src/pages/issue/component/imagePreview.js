import styled from "styled-components";
import { Link } from "react-router-dom";

const Preview = styled.div`
	background-color: inherit;
`;
const BackBtn = styled.div`
	position: absolute;
	z-index: 5;
	display: flex;
	width: 2rem;
	left: 1%;
	top: 3%;
	cursor: pointer;
`;

export default function ImagePreview(props) {
	return (
		<>
			<Link to="/">
				<BackBtn>
					<img src="/community/btn-back.png" />
				</BackBtn>
			</Link>
			<Preview>
				<img src={props.src} style={{ width: "100%", height: "42vh" }} />
			</Preview>
		</>
	);
}
