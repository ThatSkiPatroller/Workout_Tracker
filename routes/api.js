const router = require("express").Router();
const db = require("../models");

router.get('/workouts', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: '$exercises.duration'}
            }
        }
    ])
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err)
    });
});

router.get('/workouts/range', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: '$exercise.duration'}
            }
        }
    ])
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err)
    });
});

router.put('/workouts/:id', (req, res) => {
    db.Workout.findOneAndUpdate( { _id: req.params.id }, { $push: { exercises: req.body }})
    .then((dbWorkout) => {
        res.json(dbWorkout) 
    }).catch((err) => {
        res.json(err)
    })
})

router.post('/workouts', (req, res) => {
    db.Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout)
    })
    .catch((err) => {
        res.json("Error; Did not create workout", err);
    });
});

module.exports = router;
