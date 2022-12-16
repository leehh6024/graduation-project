import Nav from "./Nav";
import GlobalContext from "../../../../common/context/store.js";
import React, { useContext } from "react";

function SideNav() {
	const { state, setState } = useContext(GlobalContext);

	function closeUserTab() {
		setState((prev) => ({ ...prev, usertab: false }));
	}

	return (
		<Nav>
			<Nav.List>
				<Nav.Item>
					<Nav.Link to="#/">
						<div onClick={closeUserTab}>주변이슈 {">"}</div>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link to="#/community">
						<div onClick={closeUserTab}>커뮤니티 {">"}</div>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link to="#/environmentpage">
						<div onClick={closeUserTab}>환경정보 {">"}</div>
					</Nav.Link>
				</Nav.Item>
				<Nav.Separator />
				<Nav.Item>
					<Nav.Link to="#/guidepage">
						<div onClick={closeUserTab}>안내 가이드 {">"}</div>
					</Nav.Link>
				</Nav.Item>
			</Nav.List>
		</Nav>
	);
}

export default SideNav;
