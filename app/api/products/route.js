// app/api/products/route.js
import { todo } from 'node:test';
import prisma from '../../../lib/prisma';
//todo: find how to use prisma client/ fix undefined ProductInfo
export async function GET(req) {
  try {
    const products = await prisma.ProductInfo.findMany();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response(JSON.stringify({ error: 'Error fetching products' }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
