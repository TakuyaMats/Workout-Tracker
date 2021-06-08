const router = require("express").Router();
const workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                },
            },
        }, ])
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;