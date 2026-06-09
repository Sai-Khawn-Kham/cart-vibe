"use client"
import BreadCrumb from '@/components/Breadcrumb'
import useWishListStore from '@/store/useWishListStore';
import ProductSection from '../components/ProductSection';

const WishListPage = () => {
  const { wishLists } = useWishListStore();
  return (
    <main>
      <BreadCrumb currentPageTitle='Wishlist' />
      <ProductSection title='Wish List Products' products={wishLists} />
    </main>
  )
}

export default WishListPage