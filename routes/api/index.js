const router = require("express").Router();
const travellerRoutes = require("./travellerRoutes");
const locationRoutes = require("./locationRoutes");
const tripRoutes = require("./tripRoutes");

// location:port/api/traveller
router.use("/traveller", travellerRoutes);

// location:port/api/location
router.use("/location", locationRoutes);

// location:port/api/trip
router.use("/trip", tripRoutes);

module.exports = router;
