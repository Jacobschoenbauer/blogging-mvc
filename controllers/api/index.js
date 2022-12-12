const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogRouter = require("./blogRoutes");

router.use("/user", userRoutes);
router.use("/blog", blogRouter);

module.exports = router;
