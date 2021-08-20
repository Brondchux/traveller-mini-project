const router = require("express").Router();

// get localhost:PORT/api/location
router.get("/", (req, res) => {
	res.json("Hello Location");
});

module.exports = router;
