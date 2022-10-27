import styled, { createGlobalStyle } from "styled-components";
import SideNav from "./SideNav";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #0f0e17;
  }
`;

const Layout = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 32px 0;
	color: #a7a9be;
	font-size: 1.5rem;
	font-family: sans-serif;
	position: absolute;
	top: 240px;
`;

function Category() {
	return (
		<Layout>
			<GlobalStyle />
			<SideNav />
		</Layout>
	);
}

export default Category;
