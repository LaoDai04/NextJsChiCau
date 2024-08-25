import prisma from '../../../../../lib/prisma';
import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import { NextRequest } from 'next/server';

const handler: Request =
  NextAuth({
  providers: [
    GitHubProvider({
          clientId: process.env.GITHUB_ID as string,
          clientSecret: process.env.GITHUB_SECRET as string,
      }),
  ],
})

export { handler as GET, handler as POST }

// TODO: migrate to nextauth v5


//todo: find how to use prisma client/ fix undefined ProductInfo
// export async function GET(req) {
//   try {
//     const products = await prisma.productInfo.findMany();
//     return new Response(JSON.stringify(products), { status: 200 });
//   } 
  
//   catch (error) {
//     console.error('Error fetching products:', error);
//     return new Response(JSON.stringify({ error: 'Error fetching products' }), { status: 500 });
//   } 
  
//   finally {
//     await prisma.$disconnect();
//   }
// }
