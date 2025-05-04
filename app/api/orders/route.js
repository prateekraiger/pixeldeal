import dbConnect from '@/config/db';
import Order from '@/models/order';

export async function POST(req) {
  await dbConnect();
  const data = await req.json();
  const order = await Order.create(data);
  return new Response(JSON.stringify(order), { status: 201 });
}

export async function GET(req) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const orders = await Order.find(userId ? { userId } : {});
  return new Response(JSON.stringify(orders), { status: 200 });
}
