const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: 'Ctg'
    }
});

module.exports=mongoose.model('Users',UserSchema);