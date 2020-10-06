import { Schema, model, Document } from 'mongoose';
import bcryptjs from 'bcryptjs';

const Userschema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  } 
}, {
  timestamps:true
});

interface IUser extends Document{
  name: string;
  email: string;
  password: string;
}

Userschema.methods.encrypPassword = async (password:string) => {
  const salt = await bcryptjs.genSalt(10);
  return await bcryptjs.hash(password, salt);
}

Userschema.methods.matchPassword = async function(password: string){
  await bcryptjs.compare(password, this.password);
}

export default model<IUser>('User', Userschema);