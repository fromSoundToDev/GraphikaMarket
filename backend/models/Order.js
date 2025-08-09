import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  client: {type: mongoose.Schema.Types.ObjectId, ref:'User', required:true},
  graphiste: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  items: [{title:String, qty:Number, price:Number}],
  status: {type:String, enum:['pending','in_progress','completed','cancelled'], default:'pending'},
  total: {type:Number, default:0},
  files: [{type: mongoose.Schema.Types.ObjectId, ref:'File'}],
  createdAt:{type:Date, default:Date.now}
});

module.exports = mongoose.model('Order', OrderSchema);
