const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.post("/submit", ({ body }, res) => {
//     User.create(body)
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//     });
// });

app.use(require('./routes/api'));
app.use(require('./routes/view'))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});