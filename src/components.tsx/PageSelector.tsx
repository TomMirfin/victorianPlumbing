import { useSearchStore } from "../queryHooks.tsx/searchStore";

export default function PageSelector() {
  const setPageNumber = useSearchStore((state) => state.setPageNumber);
  const pageNumber = useSearchStore((state) => state.pageNumber);
  const pageNumbers = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col">
      <div className="mb-2 text-black">Page:</div>
      <div className="flex flex-row">
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`${
              pageNumber === page
                ? "bg-green-500"
                : "bg-green-800 hover:bg-green-700"
            } text-white font-bold py-2 px-4 rounded h-10 mx-2`}
            onClick={() => setPageNumber(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
