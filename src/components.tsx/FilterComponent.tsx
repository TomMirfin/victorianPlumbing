import { useEffect, useState } from "react";
import { useGetListing } from "../queryHooks.tsx/listings";
import ExpandableView from "./ExpandableView";
import { Checkbox } from "@mui/material";
import { useSearchStore } from "../queryHooks.tsx/searchStore";

export default function FilterComponent() {
  const { mutate: searchListing, listing } = useGetListing();
  const searchStore = useSearchStore();

  useEffect(() => {
    searchListing({
      query: "toilets",
      pageNumber: searchStore.pageNumber,
      size: searchStore.size,
      additionalPages: searchStore.additionalPages,
      sort: searchStore.sort,
    });
  }, [searchListing]);

  useEffect(() => {
    console.log("Listing:", listing);
  }, [listing]);

  return (
    <div className="fixed top-0 left-0 p-4 bg-slate-600 w-52 h-screen overflow-y-auto ml-10 mt-40 rounded-lg">
      {listing &&
        listing.facets.map((facet: any) => (
          <ExpandableView key={facet.displayName} title={facet.displayName}>
            <div>
              {facet.options.map((option: any) => (
                <div key={option.identifier} className=" bg-slate-500 w-full">
                  <div className="text-white text-sm my-2 flex flex-row justify-between align-middle">
                    {option.displayValue}
                    <div>
                      <Checkbox />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ExpandableView>
        ))}
    </div>
  );
}
