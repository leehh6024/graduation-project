import React, { useState } from "react";
import GlobalContext from "../../../common/context/store.js";
import { useContext } from "react";
import UploadScreen from "./UploadScreen.js";
import ContentsList from "./ContentsList.jsx";
import "./Quest.css";
import { Link } from "react-router-dom";

export default function Quest() {
	return (
		<div>
			<Link to="/upload">
				<button className="btn-addQuest">
					<img src="/community/btn-addQuest.png" />
				</button>
			</Link>
			<ContentsList />
		</div>
	);
}
