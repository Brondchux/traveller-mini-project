const router = require("express").Router();

// get localhost:PORT/api/traveller
router.get("/", (req, res) => {
	res.json("Hello Traveller");
});

module.exports = router;
