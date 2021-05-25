let _repository = null
class BaseService {
    constructor(repository){
        _repository = repository;
    }

    async get(id){
        if(!id){
            const error = new Error();
            error.status = 400;
            error.message = 'id must be send';
            throw error;
        }
        const currentEntity = await _repository.get(id);

        if(!currentEntity){
            const error = new Error();
            error.status = 404;
            error.message = 'id does not found';
            throw error;

        }
        return currentEntity;
    }

    async getAll(){
        return await _repository.getAll();
    }

    async create(entity){
        return await _repository.create(entity);
    }

    async update(id, entity){
        if(!id){
            const error = new Error();
            error.status = 400;
            error.message = 'id must be sent';
            throw error;
        }

        return await this.repository.update(id, entity);
    }

    async delete(id){
        if(!id){
            const error = new Error();
            error.status = 400;
            error.message = 'id must be sent';
            throw error;
        }
        return await _repository.delete(id);
    }

}

module.exports = BaseService;