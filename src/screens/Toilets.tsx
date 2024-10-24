import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetListing } from "../queryHooks.tsx/listings";
import { ProductType } from "../types";
import ListingCard from "../components.tsx/ListingCard";

export default function Toilets() {
  const { mutate: searchListing, listing } = useGetListing();
  const { pathname } = useLocation();

  useEffect(() => {
    searchListing({
      query: pathname.slice(1),
      pageNumber: 0,
      size: 0,
      additionalPages: 0,
      sort: 1,
    });
  }, [pathname]);
  console.log(listing);

  return (
    <div className="justify-around flex flex-row flex-wrap gap-5">
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
          />
        ))}
    </div>
  );
}
