const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter your exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter your exercise name"
      },
      duration: {
        type: Number,
        required: "Please enter your exercise duration in minutes"
      },
      distance: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      weight: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
