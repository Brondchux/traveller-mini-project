const express = require("express");
const app = express();

const PORT = process.env.PORT || 5600;

app.get("/", (req, res) => {
	res.json("Welcome to our traveller api page");
});

app.listen(PORT, (err) => {
	console.log(`listening on port ${PORT}`);
});
