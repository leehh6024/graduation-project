import Nav from "./Nav";
import GlobalContext from "../../../../common/context/store.js";
import React, { useContext, useCallback } from "react";

function SideNav() {
	const {
		state: { communityPage },
		setState,
	} = useContext(GlobalContext);

	return (
		<Nav>
			<Nav.List>
				<Nav.Item>
					<Nav.Link to="/community">커뮤니티 {">"}</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link to="/">주변 이슈 {">"}</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link to="/environmentpage">환경정보 {">"}</Nav.Link>
				</Nav.Item>
				<Nav.Separator />
				<Nav.Item>
					<Nav.Link to="/guidepage">안내 가이드 {">"}</Nav.Link>
				</Nav.Item>
			</Nav.List>
		</Nav>
	);
}

export default SideNav;
