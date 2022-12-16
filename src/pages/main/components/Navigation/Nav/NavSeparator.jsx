import styled from "styled-components";

const Separator = styled.hr`
	margin: 0;
	padding: 0;
	border: 1px solid #f5f5f5;
`;

function NavSeparator() {
	return <Separator role="presentation" />;
}

export default NavSeparator;
