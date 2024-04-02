import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Fetch data from API endpoint
  const data = await fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())

  // Normalize the data and create records in the database
  for (let product of data) {
    await prisma.product.create({
      data: {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });