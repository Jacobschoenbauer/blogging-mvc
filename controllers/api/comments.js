const router = require("express").Router();
const { Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ["name", "id"],
        },
      ],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/blogger", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      blog_id: req.body.blog_id,
      user_id: req.session.userId,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.userId,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: "No comment" });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
