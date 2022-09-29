import Map from "./components/Map";
import BottomSheet from "./bottomSheet";
import styled from "styled-components";

const Wrapper = styled.div`
	position: relative;
`;

export default function Main() {
	return (
		<Wrapper>
			<Map />
			<BottomSheet />
		</Wrapper>
	);
}
