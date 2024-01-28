import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import "../css/LandingPage.css";

function LandingPage() {
	return (
		<div className="container">
			<div className="overlay">
				<div className="main">
					<Link to="/table" className="dashboard">
						Dashboard
					</Link>
					<h2>Welcome to MERN Stack</h2>
					<h1>Login/Register</h1>
					<h2>Application</h2>
					<FontAwesomeIcon icon={faArrowDown} className="icon" />
					<Link to="/login" className="link">
						Login Here
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
