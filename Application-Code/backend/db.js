const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        // Convert USE_DB_AUTH env value to actual boolean
        const useDBAuth = process.env.USE_DB_AUTH === "true";

        if (useDBAuth) {
            connectionParams.user = process.env.MONGO_USERNAME;
            connectionParams.pass = process.env.MONGO_PASSWORD;
        }

        await mongoose.connect(process.env.MONGO_CONN_STR, connectionParams);
        console.log("✅ Connected to MongoDB/DocumentDB successfully.");
    } catch (error) {
        console.error("❌ Could not connect to MongoDB/DocumentDB:", error.message);
    }
};
