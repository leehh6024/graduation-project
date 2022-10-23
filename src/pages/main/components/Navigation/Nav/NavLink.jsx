import styled, { css } from "styled-components";

function isCurrent(to) {
	return window.location.pathname.startsWith(to);
}

const Link = styled.a`
	display: block;
	margin: 0 calc(20px * -1);
	padding: 8px 20px;
	border-radius: 4px;
	color: black;
	text-decoration: none;

	${(p) =>
		p.active &&
		css`
			color: #6ac47a;
			font-weight: bold;
		`}

	&:hover {
		background: #6ac47a;
		color: #fffffe;
		transform: translateY(-2px);
		transition: 1s;
	}

	&:not([href]) {
		color: #a7a9be;
		background: revert;
		transform: none;
	}
`;

function NavLink({ children, to, active = false }) {
	return (
		<Link href={to} aria-current={isCurrent(to) ? "page" : null}>
			{children}
		</Link>
	);
}

export default NavLink;
