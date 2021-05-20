const mongoose = require('mongoose');
const { Schema } = mongoose;

const IdeaSchema = new Schema({
    idea: {type: String, require: true },
    description: { type: String, require: true},
    upvotes: [{type:Boolean}],
    downvotes: [{type:Boolean}],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        autopopulate: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref:'comment',
        required: true,
        autopopulate: true
    }]
});

IdeaSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('idea',IdeaSchema);