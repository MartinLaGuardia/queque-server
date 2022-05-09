const { Schema, model } = require("mongoose");

const commentsSchema = new Schema(
    {
        username: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            require: true,
        },

        place: {
            type: Schema.Types.ObjectId,
            ref: 'Place',
            require: true,
            
        },

        text: {
            type: String,
            require: [true, 'Describe tu experiencia']
        },

        score: {
            type: Number,
            min: 0,
            max: 5,
            require: [true, '¿Cuánto le das?']
        },

        date: {
            type: Date,
            default: Date.now
        }
    },
    
    {
        timestamps: true, 
    }

);

const Comments = model("Comments", placesSchema);

module.exports = Comments;
