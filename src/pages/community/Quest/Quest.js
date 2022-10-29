import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContentsList from "./components/ContentsList.js";
import "./Quest.css";

export default function Quest() {
	return (
		<div>
			<Link to="/upload">
				<img className="btn-addQuest" src="/community/btn-addQuest.png" />
			</Link>
			<ContentsList tab="quest" />
		</div>
	);
}
