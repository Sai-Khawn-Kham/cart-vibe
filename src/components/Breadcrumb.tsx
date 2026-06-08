"use client";
import Link from "next/link";
import { FC } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { LuChevronRight, LuHouse } from "react-icons/lu";
import Container from "./Container";

type BreadcrumbPropType = {
  currentPageTitle: string;
  links?: { path: string; title: string }[];
}

const BreadCrumb: FC<BreadcrumbPropType> = ({ currentPageTitle, links }) => {
  return (
    <nav className="my-5">
      <Container className="flex items-center justify-between gap-3 py-2">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex gap-1 items-center font-medium text-gray-700 hover:text-gray-950"
            >
              <LuHouse />
              Home
            </Link>
          </li>
          {links && links.map((link, index) => (
            <li key={index} className="inline-flex items-center">
              <Link
                href={link.path}
                className="inline-flex gap-1 items-center font-medium text-gray-700 hover:text-gray-950"
              >
                <LuChevronRight />
                {link.title}
              </Link>
            </li>
          ))}
          <li className="flex items-center">
            <HiChevronRight className="text-gray-500" />
            <span className="ms-1 md:ms-2 font-medium text-gray-500">
              {currentPageTitle}
            </span>
          </li>
        </ol>
      </Container>
    </nav>
  );
};

export default BreadCrumb;