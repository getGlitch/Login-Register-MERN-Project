const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./database/connection");
const routerPath = require("./router/router");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

app.use("/api", routerPath);
app.get("/", (req, res) => {
	res.send("Welcome home");
});

app.listen(PORT, () => {
	console.log(`Server is ruuning on http://localhost:${PORT}`);
});
