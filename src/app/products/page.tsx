import ProductPage from "@/features/pages/ProductPage";

type ProductPageProps = {
  searchParams: Promise<{category?: string}>;
}

export default async function Page({searchParams} : ProductPageProps) {
  const params = await searchParams;
  const activeCategory = params.category?.toLowerCase() || 'all';
  return (
    <ProductPage activeCategory={activeCategory} />
  )
}