const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    desc: {
        type : String,
        default : " "
    },
    
    name: {
        type: String,
    },
    dueDate: Date,
    //whether the card has be checked as "done" or not
    dueComplete: { 
        type: Boolean, 
        default: false
    },
    allDay : {
        type : Boolean, 
        default: false
    },
    idBoard: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Board'
    },
    idList: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'List'
    },
    idMembers: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
    idCheckLists: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'CheckList'
    }],
    idLabels: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Label'
    }],
    isClosed: { 
        type: Boolean, 
        default: false
    },
    position: Number
},
{
    timestamps: true
});

// Duplicate the ID field.
cardSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
cardSchema.set('toJSON', {
    virtuals: true
});
module.exports = mongoose.model('Card', cardSchema);