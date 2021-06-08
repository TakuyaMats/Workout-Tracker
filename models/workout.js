const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
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
            default: 0
        },
        reps: {
            type: Number,
            default: 0
        },
        sets: {
            type: Number,
            default: 0
        },
        distance: {
            type: Number,
            default: 0
        }
    }],
    totalDuration: {
        type: Number,
        default: 0,
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;