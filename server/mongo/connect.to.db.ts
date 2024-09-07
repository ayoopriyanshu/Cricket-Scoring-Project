import mongoose from 'mongoose';

const connectToMongoDb = async (): Promise<void> => {
    try {
        const mongoUri = process.env.MONGO_DB_URI;
        
        if (!mongoUri) {
            throw new Error("MONGO_DB_URI is not defined in environment variables");
        }

        await mongoose.connect(mongoUri);
        console.log("Connected to mongoDB");
    } catch (error: any) {
        console.error("Error Connecting to mongoDB", error.message);
    }
};

export default connectToMongoDb;
