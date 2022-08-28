const JokeController = require("../controllers/joke.controller")

function registerJokeRoutes(app)
{
    app.get("/api/jokes", JokeController.getallJokes)
    app.get("/api/jokes/:joke_id", JokeController.getJokeById)
    app.get("/api/jokes/random", JokeController.getRandomJoke)

    app.post("/api/jokes/new", JokeController.addnewJoke)

    app.put("/api/jokes/update/:joke_id", JokeController.updateJokeById)
    app.delete("/api/jokes/delete/:joke_id", JokeController.deleteJokeById)
}

module.exports = registerJokeRoutes