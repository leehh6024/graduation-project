import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContentsList from "../Quest/components/ContentsList";

export default function TradeTab() {
	return (
		<>
			<TradePage>
				<ContentsList tab="trade" />
			</TradePage>
		</>
	);
}
const TradePage = styled.div`
	position: absolute;
	width: 100%;
`;
