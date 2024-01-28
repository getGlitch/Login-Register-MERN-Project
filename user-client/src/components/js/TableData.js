import React, { useEffect, useState } from "react";
import "../css/TableData.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function TableData() {
	const [allusers, setAllUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const allusers = await axios.get(
					"http://localhost:9000/api/getAllUsers"
				);
				// console.log(allusers.data.data);
				setAllUsers(allusers.data.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const handleDelete = async (id) => {
		try {
			const deleteData = await axios.delete(
				`http://localhost:9000/api/deleteUser/${id}`
			);
			alert(deleteData.data.msg);
			window.location.reload();
			// navigate("/table");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<Link to="/" className="home">
				Home
			</Link>
			<table border={1} cellPadding={14} cellSpacing={0}>
				<thead>
					<tr>
						<th>ID</th>
						<th>User Name</th>
						<th>User Email</th>
						<th>User Password</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{allusers.map((data, index) => {
						return (
							<tr key={data._id}>
								<td>{index + 1}</td>
								<td>
									{data.user_fname} {data.user_lname}
								</td>
								<td>{data.user_email}</td>
								<td>{data.user_password}</td>
								<td>
									<Link
										to="/table"
										style={{ marginRight: "1rem", color: "red" }}
										onClick={() => handleDelete(data._id)}
									>
										<FontAwesomeIcon icon={faTrash} />
									</Link>
									<Link to={`/update/${data._id}`} style={{ color: "green" }}>
										<FontAwesomeIcon icon={faPenToSquare} />
									</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default TableData;
