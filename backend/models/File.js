import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
  filename: String,
  url: String,
  size: Number,
  mimeType: String,
  uploadedBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  createdAt:{type:Date, default:Date.now}
});

module.exports = mongoose.model('File', FileSchema);
