"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export enum BreadcrumbsSeparator {
  SLASH = " / ",
  CHEVRON = " > ",
  ARROW = " → ",
}

interface BreadcrumbsProps {
  separator?: string;
}

export const Breadcrumbs = ({
  separator = BreadcrumbsSeparator.SLASH,
}: BreadcrumbsProps) => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-700">
      <ul className="flex">
        <li>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
        </li>
        {pathnames.map((part, index) => {
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={href} className="flex items-center">
              <span className="mx-2 text-gray-500">{separator}</span>
              <Link href={href} className="text-blue-600 hover:text-blue-800">
                {part}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
