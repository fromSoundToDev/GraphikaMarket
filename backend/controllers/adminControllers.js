import User from '../models/User';
import Order from '../models/Order';

export const stats = async (req,res,next)=>{
  const users = await User.countDocuments();
  const orders = await Order.countDocuments();
  res.json({users, orders});
};
