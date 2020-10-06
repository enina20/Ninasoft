import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }  
}, {
  timestamps:true
});

interface IPost extends Document{
  title: string;
  description: string
}

export default model<IPost>('Post', schema);