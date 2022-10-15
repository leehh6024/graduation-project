import Nav from "./Nav";

function isActive(path) {
	return window.location.pathname.startsWith(path);
}

function SideNav() {
	return (
		<Nav>
			<Nav.List>
				<Nav.Item>
					<Nav.Link to="/" active={isActive("/")}>
						환경정보 >
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link to="/about" active={isActive("/about")}>
						주변 이슈 >
					</Nav.Link>
				</Nav.Item>
				<Nav.Separator />
				<Nav.Item>
					<Nav.Link to="/back/python" active={isActive("/back")}>
						퀘스트 >
					</Nav.Link>
					<Nav.List expanded={isActive("/back")}>
						<Nav.Item>
							<Nav.Link to="/back/python" active={isActive("/back/python")}>
								오늘의 퀘스트
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link to="/back/java" active={isActive("/back/java")}>
								이번달 퀘스트
							</Nav.Link>
						</Nav.Item>
					</Nav.List>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link to="/front/html" active={isActive("/front")}>
						거래 >
					</Nav.Link>
					<Nav.List expanded={isActive("/front")}>
						<Nav.Item>
							<Nav.Link to="/front/html" active={isActive("/front/html")}>
								구매하러가기
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link to="/front/css" active={isActive("/front/css")}>
								판매하러가기
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link to="/front/js/react" active={isActive("/front/js")}>
								교환하러가기
							</Nav.Link>
							<Nav.List expanded={isActive("/front/js")}>
								<Nav.Item>
									<Nav.Link
										to="/front/js/react"
										active={isActive("/front/js/react")}
									>
										동네인증?
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link
										to="/front/js/vue"
										active={isActive("/front/js/vue")}
									>
										거래품목보기
									</Nav.Link>
								</Nav.Item>
							</Nav.List>
						</Nav.Item>
					</Nav.List>
				</Nav.Item>
				<Nav.Separator />
				<Nav.Item>
					<Nav.Link to="/help" active={isActive("/help")}>
						안내 가이드 >
					</Nav.Link>
				</Nav.Item>
			</Nav.List>
		</Nav>
	);
}

export default SideNav;
