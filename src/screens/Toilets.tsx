import { useEffect, useState } from "react";
import { useGetListing } from "../queryHooks/listings";
import { ProductType } from "../types";
import ListingCard from "../components/ListingCard";
import SortByComponent from "../components/SortByComponent";
import PageSelector from "../components/PageSelector";
import LoadingPage from "../components/LoadingPage";
import { useSearchStore } from "../queryHooks/searchStore";
import { useLocation, useSearchParams } from "react-router-dom";

export default function Toilets() {
  const { mutate: searchListing, listing } = useGetListing();
  const searchStore = useSearchStore();
  const location = useLocation();
  console.log(location, "location");

  const handleSelectChange = (e: { value: string; label: string }) => {
    searchStore.setSort(e.value);
  };

  useEffect(() => {
    const query = location.pathname.split("/")[1];
    searchStore.setQuery(query);
    searchListing();
  }, [
    searchStore.sort,
    searchStore.additionalPages,
    searchStore.facetSearch,
    searchStore.query,
    searchStore.pageNumber,
  ]);

  if (!listing) {
    return <LoadingPage />;
  }
  return (
    <div className="mt-14 pb-14">
      <div className={`flex flex-row align-middle gap-4`}>
        <SortByComponent
          handleSelectChange={handleSelectChange}
          selectedOption={searchStore.sort}
        />
        <div className="flex justify-center flex-row gap-2">
          <PageSelector />
        </div>
      </div>
      <p className="text-md text-black flex justify-start mr-32 mb-2">
        {listing?.pagination.total.toString() + " Results"}
      </p>
      <div className="flex flex-row flex-wrap gap-4">
        {listing &&
          listing?.products?.map((product: ProductType) => (
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
      <p className="align-middle items-center text-center text-black mt-20">
        showing {listing?.pagination.size} of {listing?.pagination.total}{" "}
        results
      </p>
      <div className="flex justify-center mt-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() =>
            searchStore.setAdditionalPages(searchStore.additionalPages + 1)
          }
        >
          Load More
        </button>
      </div>
    </div>
  );
}
