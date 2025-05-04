import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true }
    }
  ],
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: 'Order Placed' },
  date: { type: Date, default: Date.now }
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
