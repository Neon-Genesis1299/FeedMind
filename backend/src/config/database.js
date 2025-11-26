import mongoose from "mongoose";

const connectDB = async () => {
    if (process.env.MONGODB_URI){
        try {
            const connection = await mongoose.connect(
                process.env.MONGODB_URI
            );
    
            console.log(`MongoDB Connected: ${connection.connection.host}`);
        } catch (error) {
            console.error("MongoDB Connection Error:", error.message);
            process.exit(1);
        }
    } else {
        console.error("MONGODB_URI environment variable is not set");
        process.exit(1);
    }
};

mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected.");
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB reconnected ...");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB error:", err.message);
});

export default connectDB;