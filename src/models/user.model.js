const mongoose = require('mongoose');
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require('bcryptjs');

const UserSchema = new Schema({
    name: { type: String, require: true},
    username: { type: String, require: true },
    password: { type: String, require: true }
});

UserSchema.methods.comparePasswords = function (pass) {
    return compareSync(pass, this.password);
}

UserSchema.methods.toJSON = function(){
    let user = this.toObject();
    delete user.password;
    return user;
}

UserSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified("password")){
        next()
    }
    const salt = genSaltSync(10);
    const hashPassword = hashSync(user.password,salt);
    user.password = hashPassword;
    next();
});

module.exports = mongoose.model('user', UserSchema);