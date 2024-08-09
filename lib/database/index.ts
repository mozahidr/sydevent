import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    if (cached) return cached.conn;

    if(!MONGODB_URI) throw new Error('MONGODB URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'sydevent',
        bufferCommands: false,
    })
    cached.conn = await cached.promise;

    return cached.conn;
}