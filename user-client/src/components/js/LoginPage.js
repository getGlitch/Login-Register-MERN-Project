import React, { useState } from "react";
import "../css/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
	const [loginData, setLoginData] = useState({
		user_email: "",
		user_password: "",
	});
	const navigate = useNavigate();
	const inputChange = (e) => {
		const { name, value } = e.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
		// console.log(loginData);
	};
	const handleLogin = async () => {
		try {
			const loginAction = await axios.post(
				"http://localhost:9000/api/login",
				loginData
			);
			// console.log(loginAction.data.msg);
			// toast.success(loginAction.data.msg, { position: "top-center" });
			// toast(loginAction.data.msg1, { position: "top-center" });
			alert(loginAction.data.msg);

			const { user_fname, user_lname } = loginAction.data.data;
			navigate(`/home/${user_fname + " " + user_lname}`);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="container">
			<div className="overlay">
				<div className="main">
					<form id="loginForm">
						<h1>Login Here</h1>

						<input
							type="text"
							name="user_email"
							id="user_email"
							placeholder="Email"
							onChange={inputChange}
							value={loginData.user_email}
						></input>
						<input
							type="text"
							name="user_password"
							id="user_password"
							placeholder="Password"
							onChange={inputChange}
							value={loginData.user_password}
						></input>

						<input
							type="button"
							className="btn"
							value={"Login"}
							onClick={handleLogin}
						></input>
						<div style={{ marginTop: "25px", color: "azure" }}>
							<p>
								New User ?{" "}
								<Link
									to="/register"
									style={{ textDecoration: "none", marginLeft: "5px" }}
								>
									Register Here
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
