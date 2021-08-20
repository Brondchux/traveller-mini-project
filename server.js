const express = require("express");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 5600;

app.use(routes);

app.get("/", (req, res) => {
	res.json("Welcome to our traveller api page");
});

app.listen(PORT, (err) => {
	console.log(`listening on port ${PORT}`);
});
