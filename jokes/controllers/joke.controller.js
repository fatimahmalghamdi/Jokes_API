const Joke = require("../models/joke.model")

//get all jokes:
function getallJokes(req, res){
    Joke.find()
    .then(alljokes => res.json({
        records_count: alljokes.length,
        jokes: alljokes
    }))
    .catch(err => res.json({errorMsg: "Faild to fetch the data"}))
}

//get joke by id:
function getJokeById(req, res){
    const { joke_id } = req.params;
    Joke.find({_id: joke_id})
    .then(thejoke => res.json({
        joke: thejoke
    }))
    .catch(err => res.json({errorMsg: "Faild to fetch the joke"}))
}

//get random joke:
function getRandomJoke(req, res){
    // Joke.aggregate([{ $sample: { size: 1}}])
    // .then(thejoke => res.json({
    //     joke: thejoke
    // }))
    // .catch(err => res.json({errorMsg: "Faild to fetch the coco"}));
}

//add new joke:
function addnewJoke (req, res) {
    Joke.create(req.body)
        .then(newlycreatedJoke => res.json(newlycreatedJoke))
        .catch(err => res.json({error: true, message: "Faild to crate joke"}))
}

//update joke by id:
function updateJokeById (req, res) {
    const { joke_id } = req.params;
    Joke.updateOne({_id: joke_id}, req.body)
        .then(updatedjoke => res.json(updatedjoke))
        .catch(err => res.json({error: true, message: "Faild to update joke"}))
}

//delete joke by id:
function deleteJokeById (req, res) {
    const { joke_id } = req.params;
    Joke.deleteOne({_id: joke_id})
        .then((result) => res.json(result))
        .catch(err => res.json({error: true, message: "Faild to delete joke"}))
}

module.exports = {
    getallJokes,
    getJokeById,
    getRandomJoke,
    addnewJoke,
    updateJokeById,
    deleteJokeById
}