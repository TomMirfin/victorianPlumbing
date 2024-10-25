import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetListing } from "../queryHooks.tsx/listings";
import { ProductType } from "../types";
import ListingCard from "../components.tsx/ListingCard";
import SortByComponent from "../components.tsx/SortByComponent";

export default function Toilets() {
  const { mutate: searchListing, listing } = useGetListing();
  // This would be used in the real application
  const { pathname } = useLocation();
  const [selectedOption, setSelectedOption] = useState("1");
  const [pageNumber, setPageNumber] = useState(0);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    searchListing({
      query: "toilets",
      pageNumber: 1,
      size: 0,
      additionalPages: pageNumber,
      sort: +selectedOption,
    });
  }, [pathname, selectedOption, pageNumber]);
  console.log(listing);

  return (
    <div>
      <SortByComponent
        handleSelectChange={handleSelectChange}
        selectedOption={selectedOption}
      />
      <div className="justify-around flex flex-row flex-wrap gap-5 ml-80">
        {listing &&
          listing.products.map((product: ProductType) => (
            <ListingCard
              key={product.id}
              productName={product.productName}
              price={product.price}
              image={product.image}
              score={product.score}
              cultureCode={product.cultureCode}
              reviewsCount={product.reviewsCount}
              isBestSeller={product.attributes.isBestSeller}
              brandImage={product.brand.brandImage.url}
            />
          ))}
      </div>
      <div className="flex justify-center mt-10">
        {}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
