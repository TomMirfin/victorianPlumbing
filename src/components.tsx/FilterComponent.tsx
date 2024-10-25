import { useEffect } from "react";
import { useGetListing } from "../queryHooks.tsx/listings";

export default function FilterComponent() {
  const { mutate: searchListing, listing } = useGetListing();

  useEffect(() => {
    searchListing({
      query: "toilets",
      pageNumber: 1,
      size: 0,
      additionalPages: 0,
      sort: 1,
    });
  }, [searchListing]);

  useEffect(() => {
    console.log("Listing:", listing);
  }, [listing]);

  return (
    <div className="fixed top-0 left-0 p-4 bg-slate-500 w-48 h-screen overflow-y-auto ml-10 mt-40 rounded-lg">
      {listing &&
        listing.facets.map((facet: any) => {
          console.log("Facet:", facet);
          return (
            <div key={facet.displayName}>
              <h1 className="text-white text-lg font-bold">
                {facet.displayName}
              </h1>
              {facet.options.map((option: any) => {
                return (
                  <div key={option.value}>
                    <h1 className="text-white text-lg font-bold">
                      {option.displayValue}
                    </h1>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
  // return facet.options.map((option: any) => {
  //   return (
  //     <div key={option.value}>
  //       <h1 className="text-white text-lg font-bold">
  //         {option.displayValue}
  //       </h1>
  //     </div>
  //   );
  // });
}
