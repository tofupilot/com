"use client";

import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "../../catalyst/pagination";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export function PageNumber() {
  const searchParams = useSearchParams();
  return Number(searchParams.get("page")) || 1;
}

export function PaginationTheme({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    replace(`${pathname}?page=${currentPage}`);
  }, [currentPage, pathname, replace]);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const renderPaginationPage = (pageNumber: number) => {
    return (
      <PaginationPage
        href={createPageURL(pageNumber)}
        className={
          currentPage === pageNumber
            ? "before:bg-zinc-950/5 dark:before:bg-white/10"
            : ""
        }
        key={pageNumber}
      >
        {pageNumber}
      </PaginationPage>
    );
  };

  const getPaginationPages = () => {
    const pages = [];
    if (currentPage > 3) pages.push(currentPage - 2);
    if (currentPage > 2) pages.push(currentPage - 1);
    if (currentPage > 1 && currentPage < totalPages) pages.push(currentPage);
    if (currentPage < totalPages - 1) pages.push(currentPage + 1);
    if (currentPage < totalPages - 2) pages.push(currentPage + 2);
    return pages;
  };

  return (
    <Pagination>
      <PaginationPrevious
        href={currentPage > 1 ? createPageURL(currentPage - 1) : undefined}
      />
      <PaginationList>
        {renderPaginationPage(1)}
        {currentPage > 4 && <PaginationGap />}
        {getPaginationPages().map((page) => renderPaginationPage(page))}
        {currentPage < totalPages - 3 && <PaginationGap />}
        {renderPaginationPage(totalPages)}
      </PaginationList>
      <PaginationNext
        href={
          currentPage < totalPages ? createPageURL(currentPage + 1) : undefined
        }
      />
    </Pagination>
  );
}
