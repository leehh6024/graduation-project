import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContentsList from "../Quest/components/ContentsList.js";

export default function Trade() {
	return (
		<div>
			<Link to="/upload">
				<img className="btn-addQuest" src="/community/btn-addQuest.png" />
			</Link>
			<ContentsList tab="trade" />
		</div>
	);
}
