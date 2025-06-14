import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Pagination = ({
  page,
  total,
  slug,
}: {
  page: number;
  total: number;
  slug?: "page" | "events";
}) => {
  const currentPage = page;
  const totalPages = Math.ceil(total / 12);

  // Calculate the range of pages to show
  const getPageRange = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const pageRange = getPageRange();

  const getPageUrl = (pageNum: number) => {
    if (pageNum === 1) return `/${slug == "page" ? "" : slug ? slug : ""}`;
    return `/${slug ? slug : ""}/${pageNum}`;
  };

  return (
    <nav
      className="flex justify-center items-center py-8"
      aria-label="Pagination"
    >
      <div className="flex flex-wrap items-center gap-2">
        {currentPage > 1 && (
          <Link
            href={getPageUrl(currentPage - 1)}
            className="flex items-center px-3 h-10 text-[#130F45] bg-white rounded-full border-2 border-[#F45625]/20 hover:border-[#F45625] hover:bg-[#FFF7F3] active:scale-95 transition-all duration-200 shadow-sm"
            aria-label="Previous page"
          >
            <HiChevronLeft className="w-5 h-5" />
          </Link>
        )}

        <div className="flex items-center gap-1 flex-wrap">
          {pageRange.map((pageNum, idx) => {
            if (pageNum === "...") {
              return (
                <span key={`dots-${idx}`} className="px-4 py-2 text-gray-400">
                  ...
                </span>
              );
            }

            return (
              <Link
                key={`page-${pageNum}`}
                href={getPageUrl(pageNum as number)}
                className={`flex items-center justify-center min-w-[40px] h-10 px-3 rounded-full text-sm font-bold transition-all duration-200
                  ${
                    pageNum === currentPage
                      ? "bg-[#F45625] text-white shadow-lg shadow-[#F45625]/30 scale-105 z-10"
                      : "text-[#130F45] bg-white border-2 border-[#F45625]/20 hover:border-[#F45625] hover:bg-[#FFF7F3] active:scale-95"
                  }`}
              >
                {pageNum}
              </Link>
            );
          })}
        </div>

        {currentPage < totalPages && (
          <Link
            href={getPageUrl(currentPage + 1)}
            className="flex items-center px-3 h-10 text-[#130F45] bg-white rounded-full border-2 border-[#F45625]/20 hover:border-[#F45625] hover:bg-[#FFF7F3] active:scale-95 transition-all duration-200 shadow-sm"
            aria-label="Next page"
          >
            <HiChevronRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Pagination;
