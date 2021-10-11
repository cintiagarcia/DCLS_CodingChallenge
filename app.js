require("dotenv/config");
require("./db");
const express = require('express');

const mongoose = require('mongoose');

const app = express();

require("./config")(app);

const session = require("express-session");
const MongoStore = require("connect-mongo");
const DB_URL = process.env.MONGODB_URI 


app.use(
    session({
        secret: process.env.SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24},
        saveUninitialized: false,
        resave: true,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI,
        }),

    })
);


const phones = require("./routes/phones");

app.use("/api/phones", phones);

app.listen(process.env.PORT || 5555, () => {
    console.log('server listening on port 5555')
})

//deployment 
const path = require('path');
app.use(express.static(path.join(__dirname, "/client/build")));

app.use((req, res) => {
    // If no routes match, send them the React HTML.
    res.sendFile(__dirname + "/client/build/index.html");
  });


module.exports = app;