import React from "react";
import Contents from "./Contents.js";
import { Link } from "react-router-dom";

export default function ContentsList() {
	return (
		<div>
			<Link to="/contentsinfo">
				<Contents />
			</Link>
		</div>
	);
}
