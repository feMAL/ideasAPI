const BaseService = require('./base.service');
let _ideaRepo = null;

class IdeaService extends BaseService{
    constructor({IdeaRepository}){
        super(IdeaRepository);
        _ideaRepo = IdeaRepository
    }

    getUserIdeas = async (user) => {
        if(!user){
            let error = new Error()
            error.status = 400;
            error.message = 'author is required';
            throw error;
        }
        return await _ideaRepo.getUserIdeas(user);
    }
    
    async upvoteIdea (idIdea) {
        if(!idIdea){
            let error = new Error();
            error.status = 400;
            error.message = 'Id is required';
            throw error;
        }

        const idea = await _ideaRepo.get(idIdea);
        
        if(!idea){
            let error = new Error();
            error.status = 404;
            error.message = 'Idea Does not exist';
            throw error;
        }
        idea.upvotes.push(true);

        return _ideaRepo.update(idIdea,{upvotes: idea.upvotes});
    }

    async downVote(idIdea) {
        if(!idIdea){
            let error = new Error();
            error.status = 400;
            error.message = 'Id is required';
            throw error;
        }

        const idea = await _ideaRepo.get(idIdea);
        
        if(!idea){
            let error = new Error();
            error.status = 404;
            error.message = 'Idea Does not exist';
            throw error;
        }
        idea.downvotes.push(true);

        return _ideaRepo.update(idIdea,{downvotes: idea.downvotes});
    }

}

module.exports = IdeaService;