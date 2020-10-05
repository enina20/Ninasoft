import mongoose from 'mongoose';

export async function startConnection() {
  const db = await mongoose.connect('mongodb://localhost/ninadb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('database is connect');  
}