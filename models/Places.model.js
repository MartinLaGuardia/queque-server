const { Schema, model } = require("mongoose");

const placesSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            trim: true
        },

        direction: {
            type: String,
            unique: true,
            required: [true, 'La dirección es necesaria'],
            trim: true
        },

        phone: {
            type: Number,
            unique: true,
            required: [true, 'Ingresa el número de teléfono'],
            trim: true
        },

        image: {
            type: String,
            required: [true, 'Sube una imagen'],

        },

        foodstyle: {
            type: String,
        },

        description: {
            type: String,
            required: [true, 'Introduce una descripción del establecimiento.'],

        },

        location: {
            type: {
                type: String,
            },
            coordinates: [Number],

        },
    },

    {
        timestamps: true,
    }

);

const Places = model("Places", placesSchema);

module.exports = Places;
