const express = require("express");
const app = express();
const routes = require("./routes");
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 5600;

app.use(routes);

app.get("/", (req, res) => {
	res.json("Welcome to our traveller api page");
});

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, (err) => console.log(`listening on port ${PORT}`));
});
