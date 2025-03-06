import React from "react";
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/app/components/catalyst/pagination';

interface PaginationLinksProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

/**
 * Smart pagination component with adaptive page number display
 * Shows all page numbers for <= 5 total pages
 * For more pages, shows smart pagination with current page context
 */
export const PaginationLinks: React.FC<PaginationLinksProps> = ({ 
  currentPage, 
  totalPages,
  basePath = "/github"
}) => {
  const safePage = Math.max(1, currentPage);
  const hasMorePages = safePage < totalPages;
  const visiblePageNumbers = [];
  
  // Simple case: 5 or fewer pages - show all page numbers
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      visiblePageNumbers.push(i);
    }
  } 
  // Complex case: more than 5 pages - show smart pagination
  else {
    // Always show page 1
    visiblePageNumbers.push(1);
    
    // Case 1: Near the beginning (pages 1-3)
    if (safePage <= 3) {
      for (let i = 2; i <= 4; i++) {
        visiblePageNumbers.push(i);
      }
      visiblePageNumbers.push(null); // Gap
      visiblePageNumbers.push(totalPages); // Last page
    } 
    // Case 2: Near the end
    else if (safePage >= totalPages - 2) {
      visiblePageNumbers.push(null); // Gap
      for (let i = totalPages - 3; i <= totalPages; i++) {
        if (i > 1) visiblePageNumbers.push(i);
      }
    }
    // Case 3: Somewhere in the middle
    else {
      visiblePageNumbers.push(null); // Gap
      visiblePageNumbers.push(safePage - 1);
      visiblePageNumbers.push(safePage);
      visiblePageNumbers.push(safePage + 1);
      visiblePageNumbers.push(null); // Gap
      visiblePageNumbers.push(totalPages); // Last page
    }
  }
  
  return (
    <div className="mt-16 flex justify-center w-full">
      <Pagination className="w-full flex justify-between">
        <PaginationPrevious 
          href={safePage > 1 ? `${basePath}?page=${safePage - 1}` : null} 
        />
        
        <PaginationList className="flex-grow flex justify-center">
          {visiblePageNumbers.map((pageNum, index) => 
            pageNum === null ? (
              <PaginationGap key={`gap-${index}`} />
            ) : (
              <PaginationPage 
                key={`page-${pageNum}`}
                href={`${basePath}?page=${pageNum}`}
                current={safePage === pageNum}
              >
                {pageNum}
              </PaginationPage>
            )
          )}
        </PaginationList>
        
        <PaginationNext 
          href={hasMorePages ? `${basePath}?page=${safePage + 1}` : null}
        />
      </Pagination>
    </div>
  );
};