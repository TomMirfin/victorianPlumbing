import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetListing } from "../queryHooks.tsx/listings";
import { ProductType } from "../types";
import ListingCard from "../components.tsx/ListingCard";
import SortByComponent from "../components.tsx/SortByComponent";
import PageSelector from "../components.tsx/PageSelector";
import LoadingPage from "../components.tsx/LoadingPage";

export default function Toilets() {
  const { mutate: searchListing, listing } = useGetListing();

  const { pathname } = useLocation();
  const [selectedOption, setSelectedOption] = useState("1");
  const [additionalPages, setAdditionalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const handleSelectChange = (e: { value: string; label: string }) => {
    setSelectedOption(e.value);
  };

  useEffect(() => {
    searchListing({
      query: "toilets",
      pageNumber: pageNumber,
      size: 0,
      additionalPages: pageNumber,
      sort: +selectedOption,
    });
  }, [pathname, selectedOption, pageNumber]);
  console.log(listing);

  if (!listing) {
    return <LoadingPage />;
  }

  return (
    <div className="mt-10">
      <div className={`flex flex-row align-middle gap-20`}>
        <SortByComponent
          handleSelectChange={handleSelectChange}
          selectedOption={selectedOption}
        />
        <div className="flex justify-center flex-row gap-2">
          <PageSelector setPageNumber={setPageNumber} pageNumber={pageNumber} />
        </div>
      </div>

      <div className="justify-around flex flex-row flex-wrap gap-5">
        {listing ? (
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
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setAdditionalPages(additionalPages + 1)}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
