//comments backend routes

const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newComm = await Comment.create({
      ...req.body,
      // com_name: req.session.com_name,
    });

    res.status(200).json(newComm);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const commData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commData) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }

    res.status(200).json(commData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
