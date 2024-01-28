import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [updateData, setUpdateData] = useState({
		user_fname: "",
		user_lname: "",
		user_email: "",
	});
	const inputChange = (e) => {
		const { name, value } = e.target;
		setUpdateData({
			...updateData,
			[name]: value,
		});
		// console.log(registerData);
	};
	const handleUpdate = async () => {
		const update = await axios.put(
			`http://localhost:9000/api/updateUser/${id}`,
			updateData
		);
		alert(update.data.msg);
		setUpdateData({
			user_fname: "",
			user_lname: "",
			user_email: "",
		});
		navigate("/table");
	};
	useEffect(() => {
		try {
			const fetchdata = async () => {
				const singleData = await axios.get(
					`http://localhost:9000/api/getOneUser/${id}`
				);
				setUpdateData({
					user_fname: singleData.data.data.user_fname,
					user_lname: singleData.data.data.user_lname,
					user_email: singleData.data.data.user_email,
				});
				// navigate("/table");
			};
			fetchdata();
		} catch (error) {
			console.log(error);
		}
	}, []);
	return (
		<div className="container">
			<div className="overlay">
				<div className="main">
					<form id="loginForm">
						<h1>Update Here</h1>

						<input
							type="text"
							name="user_fname"
							id="user_fname"
							placeholder="First Name"
							onChange={inputChange}
							value={updateData.user_fname}
						></input>
						<input
							type="text"
							name="user_lname"
							id="user_lname"
							placeholder="Last Name"
							onChange={inputChange}
							value={updateData.user_lname}
						></input>
						<input
							type="text"
							name="user_email"
							id="user_email"
							placeholder="Email"
							onChange={inputChange}
							value={updateData.user_email}
						></input>

						<input
							type="button"
							className="btn"
							value={"Update"}
							onClick={handleUpdate}
						></input>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Update;
