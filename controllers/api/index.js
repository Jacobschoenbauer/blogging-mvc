const router = require("express").Router();
const useroutes = require("./useroutes");
const blogRouter = require("./blogroutes")
router.use("/user", useroutes);
router.use("/blog", blogRouter)



module.exports = router;
