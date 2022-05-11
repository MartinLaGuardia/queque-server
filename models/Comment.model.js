const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            //require: true,
        },

        place: {
            type: Schema.Types.ObjectId,
            ref: 'Place',
            //require: true,

        },

        text: {
            type: String,
            //require: [true, 'Describe tu experiencia']
        },

        rating: {
            type: Number,
            min: 0,
            max: 5,
            //require: [true, '¿Cuánto le das?']
        },

    },

    {
        timestamps: true,
    }

);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
