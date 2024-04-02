import prisma from "@/lib/prisma";
export default async function Home() {
  const products = await prisma.product.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {products?.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center justify-center"
        >
          <img src={product.image} width={200} height={200} />
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg">{product.description}</p>
          <p className="text-lg">${product.price}</p>
        </div>
      ))}
    </main>
  );
}
