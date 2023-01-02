import { mongoose, Schema, model } from 'mongoose';

const messageSchema = new mongoose.Schema({
  email: { type: String, required: true, max: 100 },
  fecha: { type: String, required: true, max: 100 },  
  mensaje: { type: String, required: true, max: 100 },
});

const Message = model('message', messageSchema);
export { Message }