const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
router.use("/user", apiRoutes);
router.use("/home", homeRoutes);
module.exports = router;
