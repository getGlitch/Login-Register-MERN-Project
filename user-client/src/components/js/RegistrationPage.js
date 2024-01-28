import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/RegistrationPage.css";
import axios from "axios";

function RegistrationPage() {
	const inputRef = useRef();
	const [registerData, setRegisterData] = useState({
		user_fname: "",
		user_lname: "",
		user_email: "",
		user_password: "",
		user_cpassword: "",
	});
	const navigate = useNavigate();
	const inputChange = (e) => {
		const { name, value } = e.target;
		setRegisterData({
			...registerData,
			[name]: value,
		});
		// console.log(registerData);
	};
	const handleSubmit = async () => {
		try {
			if (registerData.user_password === registerData.user_cpassword) {
				const response = await axios.post(
					"http://localhost:9000/api/createUser",
					registerData
				);
				// toast.success(response.data.msg, { position: "top-center" });
				alert(response.data.msg);
				navigate("/login");
			} else {
				alert("Password did not match !!");
				inputRef.current.focus();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<div className="overlay">
				<div className="main">
					<form id="loginForm">
						<h1>Register Here</h1>

						<input
							type="text"
							name="user_fname"
							id="user_fname"
							placeholder="First Name"
							onChange={inputChange}
						></input>
						<input
							type="text"
							name="user_lname"
							id="user_lname"
							placeholder="Last Name"
							onChange={inputChange}
						></input>
						<input
							type="email"
							name="user_email"
							id="user_email"
							placeholder="Email"
							onChange={inputChange}
						></input>
						<input
							type="password"
							name="user_password"
							id="user_password"
							placeholder="Password"
							onChange={inputChange}
						></input>
						<input
							type="password"
							name="user_cpassword"
							id="user_cpassword"
							placeholder="Confirm Password"
							onChange={inputChange}
							ref={inputRef}
						></input>
						<input
							type="button"
							className="btn"
							value={"Register"}
							onClick={handleSubmit}
						></input>
						<div style={{ marginTop: "25px", color: "azure" }}>
							<p>
								Already registered ?{" "}
								<Link
									to="/login"
									style={{ textDecoration: "none", marginLeft: "5px" }}
								>
									Login Here
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default RegistrationPage;
