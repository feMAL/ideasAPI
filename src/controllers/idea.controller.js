let _ideaService = null;

class IdeaController {
    constructor({IdeaService}){
        _ideaService = IdeaService;
    }

    async get(req, res){
        let {ideaId} = req.params;
        const idea = await _ideaService.get(ideaId);
        return res.send(idea);
    }

    async getAll(req, res){
        const ideas = await _ideaService.getAll();
        return res.send(ideas);
    }

    async update(req,res){
        let {body} = req;
        let {ideaId} = req.params;

        const updateIdea = await _ideaService.update(ideaId,body)
        return res.send(updateIdea);
    }

    async delete (req, res){
        let { ideaId } = req.params;
        const deletedIdea = await _ideaService.delete(ideaId);
        return res.send(deletedIdea);
    }

    async getUserIdea(req, res){
        const { userId } = req.params;
        const ideas = await _ideaService.getUserIdeas(userId);
        return res.send(ideas);
    }

    async upVotes(req,res){
        const { userId } = req.params;
        const ideas = await _ideaService.upvoteIdea(userId);
        return res.send(ideas);
    }

    async downVotes(req,res){
        const { userId } = req.params;
        const ideas = await _ideaService.downvoteIdea(userId);
        return res.send(ideas);
    }
}

module.exports = IdeaController;