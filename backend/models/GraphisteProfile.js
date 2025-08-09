import mongoose from 'mongoose';

const GraphisteProfileSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User', required:true, unique:true},
  bio: String,
  skills: [String],
  portfolio: [{url:String, filename:String}],
  rating: {type:Number, default:0},
  createdAt:{type:Date, default:Date.now}
});

module.exports = mongoose.model('GraphisteProfile', GraphisteProfileSchema);
