const mongoose = require('mongoose');
const dbURI = "mongodb://127.0.0.1:27017/710720205050";

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {});
        console.log("MongoDB Database Connected...");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
module.exports = connectDB;

