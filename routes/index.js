const router = require("express").Router();
const apiRoutes = require("./api");

// localhost:port/api
router.use("/api", apiRoutes);

module.exports = router;
