//require("dotenv").config();
require("./db");
const express = require('express');
const mongoose = require("mongoose");

const app = express();

require("./config")(app);

const session = require("express-session");
const MongoStore = require("connect-mongo");
const DB_URL= "mongodb://localhost/DCLS_CHALLENGE";

app.use(
    session({
        secret: "coding",
        cookie: {maxAge: 1000 * 60 * 60 * 24},
        saveUninitialized: false,
        resave: true,
        store: MongoStore.create({
            mongoUrl: DB_URL,
        }),

    })
);


const phones = require("./routes/phones");

app.use("/api/phones", phones);

app.listen(5555, () => {
    console.log('server listening on port 5555')
})


module.exports = app;