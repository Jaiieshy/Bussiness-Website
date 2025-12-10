import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing! Add it in Railway → Variables");
  process.exit(1);
}

let isConnected = false;



// Connect to MongoDB
export async function connectDatabase(): Promise<void> {
  try {
    const options = {
      serverSelectionTimeoutMS: 5000,
    };

    await mongoose.connect(MONGO_URI!, options); // <-- FIXED
    isConnected = true;
    console.log('✅ MongoDB Connected');
    console.log(`📦 Database: ${mongoose.connection.db?.databaseName}`);
  } catch (error: any) {
    isConnected = false;
    console.error('\n❌ MongoDB connection error!');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    if (error.message?.includes('ECONNREFUSED')) {
      console.error('⚠️  MongoDB is not running or not accessible.');
      console.error('\n📋 To fix this, choose one option:');
      console.error('\n   Option 1: Use MongoDB Atlas (Cloud - Recommended)');
      console.error('   • Create free account: https://mongodb.com/cloud/atlas');
      console.error('   • Create .env file in Server folder with:');
      console.error('     MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/newdeepakmarble');
      console.error('     (or use MONGODB_URI - both work)');
      console.error('\n   Option 2: Install Local MongoDB');
      console.error('   • Download: https://www.mongodb.com/try/download/community');
      console.error('   • Install and start MongoDB service');
      console.error('   • Then restart this server');
    } else {
      console.error('Error details:', error.message);
    }
    
    console.error('\n⚠️  Server will start but database operations will fail.');
    console.error('   The API will return errors until MongoDB is connected.');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    // Don't exit - allow server to start but show warnings
    // The server can still run, but database operations will fail gracefully
  }
}

// Check if database is connected
export function isDatabaseConnected(): boolean {
  return isConnected && mongoose.connection.readyState === 1;
}

// Handle connection events
mongoose.connection.on('connected', () => {
  isConnected = true;
  console.log('✅ Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  isConnected = false;
  console.error('❌ Mongoose connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  isConnected = false;
  console.log('⚠️ Mongoose disconnected from MongoDB');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed through app termination');
  process.exit(0);
});

export default mongoose;

