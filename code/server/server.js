const express = require('express');

const router = express.Router();

const app = express();

const connectDB = require("./config/db.config");

connectDB();

app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({
        msg: "Testing"
    });
});

app.listen(9000, () => console.log("Your server has been started."));