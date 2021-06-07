const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [{
        type: {
            type: String,
            required: "Insert a workout type"
        },
        name: {
            type: String,
            trim: true,
            required: "Insert a workout name"
        },
        duration: {
            type: Number,
            required: "Insert a input for the duration"
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }],
    day: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;