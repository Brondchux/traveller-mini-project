const router = require("express").Router();

// get localhost:PORT/api/trip
router.get("/", (req, res) => {
	res.json("Hello Trip");
});

module.exports = router;
