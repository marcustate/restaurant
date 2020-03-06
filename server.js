// Dependencies
//========================================
const express = require("express");
const path = require ("path");
const api = require("./routes/apiRoutes")(app);
const routes = require("./routes/htmlRoutes")(app);

// Sets up the Express App
// ========================================

const app = express();
const PORT = 5150;

// Sets up the Express app to handle data 

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Restaurant (Data)




app.listen(PORT , function(){
    console.log("App is listening " + PORT);
});