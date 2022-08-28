
const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//user:
const userRoutesFunction = require("./routes/user.routes")
userRoutesFunction(app);

//joke:
const jokeRoutesFunction = require("./routes/joke.routes")
jokeRoutesFunction(app)

require("./config/mongoose.config")


app.listen(8000, () => console.log("Our application is running on port 8000"));