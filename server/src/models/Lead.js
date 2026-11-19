import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true},phone:{type:String,required:true},email:String,business:String,message:String,source:String,status:{type:String,enum:['new','contacted','converted','closed'],default:'new'}},{timestamps:true});export default mongoose.model('Lead',schema);
