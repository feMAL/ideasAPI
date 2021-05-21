const BaseService = require('./base.service');
let _CommentRepository = null;
let _ideaRepository = null;

class CommentService extends BaseService {
    
    constructor ({CommentRepository, IdeaRepository}) {
        super(CommentRepository)
        _CommentRepository = CommentRepository;
        _ideaRepository = IdeaRepository;
    }

    getIdeaComments = async (ideaId) => {
        if(!ideaId) {
            const error = new Error();
            error.status = 400;
            error.message = 'idea does not sent';
            throw error;
        }

        const idea = await _ideaRepository.get(ideaId);
        if(!idea){
            const error = new Error();
            error.status = 404;
            error.message = 'idea does not exist';
            throw error;
        }
        const { comments } = idea;
        return comments;
    }

    createComment = async(comment, ideaId) => {
        if(!ideaId) {
            const error = new Error();
            error.status = 400;
            error.message = 'idea does not sent';
            throw error;
        }
        let idea = await _ideaRepository.get(ideaId);
        if(!idea){
            const error = new Error();
            error.status = 404;
            error.message = 'idea does not exist';
            throw error;
        }
        const createdComment = await _CommentRepository.create(comment);
        idea.comments.push(createdComment);
        return await _ideaRepository.update(ideaId, {comments: idea.comments });

    }
}

module.exports = CommentService;