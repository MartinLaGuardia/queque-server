const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true
    },

    email: {
      type: String,
      unique: true,
      required: [true, 'Email obligatorio'],
      trim: true
    },

    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },

    password: {
      type: String,
      required: [true, 'Contraseña obligatoria'],
      trim: true
    },

    placesfavs: [String],

  },

  {
    timestamps: true,
  }

);

const User = model("User", userSchema);

module.exports = User;
