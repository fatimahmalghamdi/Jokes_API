const mongoose = require("mongoose")

const JokeSchema = mongoose.Schema({
    setup: String,
    punchline: String
})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;