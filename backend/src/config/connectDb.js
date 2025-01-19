import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Atlas Connected: ${conn.connection.host}`)
    } catch (err){
        console.error(`Error connecting to mongoDB atlas: ${err.message}`);
        process.exit(1);
    }
}

export default connectDb;