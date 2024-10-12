import productsData from '../testData/products.json';
import Image from 'next/image';
import * as fs from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
type ProductType = (typeof productsData.products)[0];
export const Shop = () => {
  return (
    <div className='flex flex-row gap-40 py-96 px-24'>
      {productsData.products.map((product) => {
        return <Product key={product.name} product={product} />;
      })}
    </div>
  );
};

async function Product({ product }: { product: ProductType }) {
  const imgsrcs = [];
  try {
    const files = await fs.readdir(`public/${product.imgSrcDir}/`);
    for (const file of files)
      imgsrcs.push(fileURLToPath(`public/${product.imgSrcDir}/file`));
  } catch (err) {
    console.error(err);
  }
  return (
    <div className='border-2 border-gray-200 p-4 rounded-lg flex'>
      <div className='text-lg font-bold'>{product.name}</div>
      <div className='text-sm'>{product.description}</div>
      <div className='text-lg font-bold'>{product.price}</div>
      <div>{Number(product.stock) > 0 ? product.stock : 'Sold Out'}</div>
    </div>
  );
}
