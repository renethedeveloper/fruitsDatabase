const mongoose = require('mongoose');

// create schema (breakdown of what our data should look like)
const veggiesSchema = new mongoose.Schema(
    {
        name: String,
        color: String,
        age: Number,
        isHealthy: Boolean,
    },
    {
        timestamps: true
    }
);

// create Model with that schema
// whatever we put as the collection name will be lowercased and pluralized +s
// Veggies > veggies
const Veggies = mongoose.model("Veggies", veggiesSchema);

module.exports = Veggies;
