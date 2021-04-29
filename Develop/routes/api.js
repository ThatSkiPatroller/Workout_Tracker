const router = require("express").Router();
const db = require("../models/");

router.get('/api/workouts', (req, res) => {
    db.Workout.findAll({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err)
    });
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err)
    });
});

router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findOneAndUpdate( { _id: req.params.id }, { $push: { exercises: req.body }})
    .then((dbWorkout) => {
        res.json(dbWorkout) 
    }).catch((err) => {
        res.json(err)
    })
})

router.post('api/workouts', (req, res) => {
    db.Workout.create({})
    .then((dbWorkout) => {
        res.json(dbWorkout)
    })
    .catch((err) => {
        res.json("Error; Did not create workout", err);
    });
});

module.exports = router;
