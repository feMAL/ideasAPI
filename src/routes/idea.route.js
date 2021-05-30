const { Router } = require('express');

module.exports = function ({IdeaController}) {
    const router = Router();

    router.get("/:ideaId", IdeaController.get);
    router.get("", IdeaController.getAll);
    router.patch("/:ideaId", IdeaController.update);
    router.delete("/:ideaId", IdeaController.delete);
    //router.post("",IdeaController.create);
    router.get("/:userId/all",IdeaController.getUserIdeas);
    router.post("/:ideaId/upvote",IdeaController.upVotes);
    router.post("/:ideaId/downvote",IdeaController.downVotes);

    return router;
}