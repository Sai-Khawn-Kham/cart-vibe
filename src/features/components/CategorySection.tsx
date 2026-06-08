'use client'
import Container from "@/components/Container"
import useCategoryStore from "@/store/useCategoryStore";
import Link from "next/link";

const CategorySection = ({activeCategory} : {activeCategory: string}) => {
  const { categories } = useCategoryStore();
  return (
    <Container className="">
      <ul className="overflow-auto text-nowrap hide-scroll-bar flex gap-2">
        {categories.map((category, index) => (
          <li key={index}>
            <Link href={`/products?category=${category.toLowerCase()}`} className={`${activeCategory === category.toLowerCase() ? 'bg-gray-900 text-gray-100' : ''} hover:scale-90 inline-block w-36 text-center capitalize py-1 px-2 border border-white rounded`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default CategorySection