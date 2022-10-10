import IssuePage from "./pages/issue/issuePage";
import Main from "./pages/main/mainPage";
import React, { useContext } from "react";
import GlobalContext from "./common/context/store";
import styled from "styled-components";
import "./router.css";

const Container = styled.div`
	position: relative;
	width: 100%;
	min-height: 100vh;
	height: 100%;
	max-width: 430px;
	min-width: 320px;
	margin: auto;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
		rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

function Controller() {
	const pages = [<Main />, <IssuePage />];

	const {
		state: { page },
		setState,
	} = useContext(GlobalContext);

	const setPage = (page) => setState((prev) => ({ ...prev, page: page }));

	return (
		<Container>
			<button
				className="btn-map"
				style={{
					position: "fixed",
					left: 0,
					top: 0,
					width: "100px",
					height: "30px",
				}}
				onClick={() => setPage(0)}
			>
				Map
			</button>
			<img
				className="btn-issue"
				src="/issue-button.png"
				alt="issue"
				onClick={() => setPage(1)}
			/>
			{pages[page]}
		</Container>
	);
}

export default Controller;
