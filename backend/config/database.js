const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        // useNewUrlParser: true, // Remove this line
        // useUnifiedTopology: true, // Remove this line
    }).then((data) => {
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    }).catch((err) => {
        console.log(`MongoDB connection failed: ${err.message}`);
        process.exit(1);
    });
};

module.exports = connectDatabase;