const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogRouter = require("./blogRoutes");
const commentRoutes = require("./comments");
router.use("/user", userRoutes);
router.use("/blog", blogRouter);
router.use("/comm", commentRoutes);
module.exports = router;
