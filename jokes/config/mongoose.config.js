const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/my_database")
.then(() => console.log("successfully conneted to the db"))
.catch(err => console.log("faild to connect to the database"))