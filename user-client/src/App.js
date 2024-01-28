import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/js/LoginPage";
import RegistrationPage from "./components/js/RegistrationPage";
import HomePage from "./components/js/HomePage";
import LandingPage from "./components/js/LandingPage";
import TableData from "./components/js/TableData";
import Update from "./components/js/Update";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<LandingPage />}></Route>
					<Route exact path="/login" element={<LoginPage />}></Route>
					<Route exact path="/register" element={<RegistrationPage />}></Route>
					<Route exact path="/home/:user" element={<HomePage />}></Route>
					<Route exact path="/table" element={<TableData />}></Route>
					<Route exact path="/update/:id" element={<Update />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
