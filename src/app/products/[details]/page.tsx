import ProductDetailPage from "@/features/pages/ProductDetailPage";

type RouteParams = {
  details: string;
}

type ProductDetailPageProps = {
  params: Promise<RouteParams>
}

export default async function Page({ params } : ProductDetailPageProps) {
  const { details } = await params;
  return (
    <ProductDetailPage details={details} />
  );
}
