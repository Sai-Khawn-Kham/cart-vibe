"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { LuChevronLeft, LuChevronRight, LuHouse } from "react-icons/lu";
import Container from "./Container";

type BreadcrumbPropType = {
  currentPageTitle: string;
  links?: { path: string; title: string }[];
}

const BreadCrumb: FC<BreadcrumbPropType> = ({ currentPageTitle, links }) => {
  const router = useRouter();
  return (
    <nav className="mb-5">
      <Container className="flex items-center justify-between gap-3 border-b border-gray-300 dark:border-gray-700 py-2">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex gap-1 items-center text-sm font-medium text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              <LuHouse />
              Home
            </Link>
          </li>
          {links && links.map((link, index) => (
            <li key={index} className="inline-flex items-center">
              <Link
                href={link.path}
                className="inline-flex gap-1 items-center text-sm font-medium text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
              >
                <LuChevronRight />
                {link.title}
              </Link>
            </li>
          ))}
          <li className="flex items-center">
            <HiChevronRight className="text-gray-400" />
            <span className="ms-1 md:ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              {currentPageTitle}
            </span>
          </li>
        </ol>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => router.back()}
            className=" size-7 flex justify-center items-center text-sm font-medium bg-white border border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          >
            <LuChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => window.history.forward()}
            className=" size-7 flex justify-center items-center text-sm font-medium bg-white border border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          >
            <LuChevronRight />
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default BreadCrumb;