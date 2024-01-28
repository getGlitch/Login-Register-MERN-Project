import React from "react";
import "../css/HomePage.css";
import { Link, useParams } from "react-router-dom";

function HomePage() {
	const { user } = useParams();
	return (
		<div className="homeMain">
			<h1 style={{ marginTop: "20px" }}>Welcome {user} !!</h1>
			<div className="logout">
				<Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
					LogOut!
				</Link>
			</div>
		</div>
	);
}

export default HomePage;
