const User = require('../models/User');

export const list = async (req,res,next)=>{
  const users = await User.find();
  res.json(users);
};


export const get = async (req,res,next)=>{
  const user = await User.findById(req.params.id);
  if(!user) return res.status(404).json({message:'Not found'});
  res.json(user);
};


export const update = async (req,res,next)=>{
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(user);
};


export const remove = async (req,res,next)=>{
  await User.findByIdAndDelete(req.params.id);
  res.json({message:'deleted'});
};
