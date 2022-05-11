const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        name: {
            type: String,
            //unique: true,
        },

        address: {
            street: String,
            number: String,
            city: String,
            zipCode: Number,
            location: {
                type: {
                    type: String,
                },
                coordinates: [Number],
            }
        },

        phone: {
            type: String,
            //unique: true,
            //required: [true, 'Ingresa el número de teléfono'],

        },

        imageURL: {
            type: String,
            //required: [true, 'Sube una imagen'],

        },

        foodstyle: {
            type: String,
        },

        description: {
            type: String,
            //required: [true, 'Introduce una descripción del establecimiento.'],

        },
    },

    {
        timestamps: true,
    }

);

const Place = model("Place", placeSchema);

module.exports = Place;
