import React from "react";
import styled from "styled-components";
import BottomSheetHeader from "./components/bottomSheetHeader.js";
import { motion } from "framer-motion";
import { useBottomSheet } from "./components/useBottomSheet.js";

const MIN_Y = 60; // 바텀시트가 최대로 높이 올라갔을 때의 y 값
const MAX_Y = window.innerHeight - 80; // 바텀시트가 최소로 내려갔을 때의 y 값
const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y; // 바텀시트의 세로 길이

const Wrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
	border-top-left-radius: 18px;
	border-top-right-radius: 18px;
	background-color: #fff;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
	height: ${BOTTOM_SHEET_HEIGHT}px;
	transition: transform 150ms ease-out;
`;

const BottomSheet = () => {
	const { sheet } = useBottomSheet();

	return (
		<Wrapper ref={sheet}>
			<BottomSheetHeader />
		</Wrapper>
	);
};

export default BottomSheet;
