'use client'
import useProductStore from '@/store/useProductStore';
import HeroSection from '../components/HeroSection'
import { ProductType } from '@/type/ProductType';
import ProductSection from '../components/ProductSection';

const HomePage = () => {
  const { products } = useProductStore();
  const newProducts: ProductType[] = products.filter((product: ProductType) => product.status === "new");
  const trendProducts: ProductType[] = products.filter((product: ProductType) => product.status === "trend");
  const youMayLike: ProductType[] = products.filter((product: ProductType) => product.status === "you-may-like");
  return (
    <main>
      <HeroSection />
      <ProductSection title={"New Products"} products={newProducts} />
      <ProductSection title={"Trending Products"} products={trendProducts} />
      <ProductSection title={"You May Like"} products={youMayLike} />
    </main>
  )
}

export default HomePage