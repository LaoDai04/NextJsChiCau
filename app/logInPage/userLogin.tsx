import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({})

// A `main` function so that you can use async/await
async function main() {
  // Create user, posts, and categories
  const user = await prisma.products_info.create({
   data: {
    id: "test",
    description: "lam trang da",
    id_: 1,
    name: "kem",
    quantity: 1
   }
  })
}

export default function loginPage(){
    return <h1> please log in</h1>
}

main()