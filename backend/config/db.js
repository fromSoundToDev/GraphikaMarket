import mongoose from 'mongoose';
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/design-print';

module.exports = async function connectDB(){
  try{
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  }catch(err){
    console.error('DB connection error', err);
    process.exit(1);
  }
};
