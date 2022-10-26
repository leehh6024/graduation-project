import styled from "styled-components";
import { Link } from "react-router-dom";
import "./IssueResolve.css";

const Box = styled.div`
	& > img {
		width: 210px;
		height: 210px;
	}

	& > label {
		width: 210px;
		height: 210px;
		position: absolute;
	}

	& > input {
		display: none;
	}

	.button-upload {
		width: 100%;
		object-fit: contain;
		margin: auto;
	}

	label {
		cursor: pointer;
	}
`;

function IssueResolve({ onUpload }) {
	return (
		<>
			<Box className="Box">
				<Link to="/issueresolvewriting">
					<img
						src="/photo.png"
						style={{
							width: "210px",
							height: "210px",
							margin: "auto",
							verticalAlign: "middle",
							borderRadius: "50%",
							boxShadow: "3px 9px 10px rgba(0,0,0,0.25)",
						}}
					/>
				</Link>
			</Box>
			<div className="issue-resolve-text">
				이슈를 해결한 사진을 등록해 주세요
			</div>
		</>
	);
}

export default IssueResolve;