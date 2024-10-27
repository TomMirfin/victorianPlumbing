import { useEffect } from "react";
import { useGetListing } from "../queryHooks.tsx/listings";
import ExpandableView from "./ExpandableView";
import { Checkbox } from "@mui/material";
import { useSearchStore } from "../queryHooks.tsx/searchStore";

export default function FilterComponent() {
  const { mutate: searchListing, listing } = useGetListing();
  const setFacetSearch = useSearchStore((state) => state.setFacetSearch);
  const facetSearch = useSearchStore((state) => state.facetSearch);

  useEffect(() => {
    searchListing();
  }, []);

  const handleSelection = (
    event: React.ChangeEvent<HTMLInputElement>,
    option: any,
    facet: any
  ) => {
    const isChecked = event.target.checked;
    const identifier = facet.identifier;

    if (isChecked) {
      const query = {
        ...facetSearch,
        [identifier]: [
          {
            value: option.value,
          },
        ],
      };
      setFacetSearch(query);
    } else {
      const updatedSearch = { ...facetSearch };
      delete updatedSearch[identifier];
      setFacetSearch(updatedSearch);
    }
  };

  return (
    <div className="fixed top-0 left-0 p-4 bg-slate-600 w-52 h-screen overflow-y-auto ml-10 mt-40 rounded-lg">
      {listing &&
        listing.facets.map((facet: any) => (
          <ExpandableView key={facet.displayName} title={facet.displayName}>
            <div>
              {facet?.options?.map((option: any) => (
                <div key={option.identifier} className="bg-slate-500 w-full">
                  <div className="text-white text-sm my-2 flex flex-row justify-between align-middle p-2">
                    {facet.displayName === "Price"
                      ? "£" + option.displayValue
                      : "" + option.displayValue}
                    <Checkbox
                      onChange={(event) =>
                        handleSelection(event, option, facet)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </ExpandableView>
        ))}
    </div>
  );
}
