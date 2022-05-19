const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {

    imageURL: {
      type: String
    },

    favFood: {
      type: String
    },

    username: {
      type: String,
      //unique: true,
    },

    email: {
      type: String,
      //unique: true,
      //required: [true, 'Email obligatorio'],
    },

    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },

    password: {
      type: String,
      //required: [true, 'Contraseña obligatoria'],

    },

    favPlaces: [{
      type: Schema.Types.ObjectId,
      ref: 'Place'
    }]
  },

  {
    timestamps: true,
  }

);

const User = model("User", userSchema);

module.exports = User;
