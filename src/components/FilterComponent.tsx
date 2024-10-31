import { useEffect, useState } from "react";
import { useGetListing } from "../queryHooks/listings";
import ExpandableView from "./ExpandableView";
import { Checkbox } from "@mui/material";
import { useSearchStore } from "../queryHooks/searchStore";
import { Facet, Option } from "../types";
export default function FilterComponent() {
  const { mutate: searchListing, listing } = useGetListing();
  const setFacetSearch = useSearchStore((state) => state.setFacetSearch);
  const facetSearch: { [key: string]: { value: string }[] } = useSearchStore(
    (state) => state.facetSearch
  );

  const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    searchListing();
  }, []);

  const handleSelection = (
    event: React.ChangeEvent<HTMLInputElement>,
    option: Option,
    facet: Facet
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
      // Copy the facetSearch object to not mutate the original object
      const updatedSearch = { ...facetSearch };
      // Delete the selected option from the facetSearch object
      delete updatedSearch[identifier];
      // Update the facetSearch object
      setFacetSearch(updatedSearch);
    }
  };

  const toggleShowMore = (facetId: string) => {
    console.log(facetId);
    // Toggle the showMore state for the selected facet

    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      // Toggle the showMore state for the selected facet by using the previous state
      [facetId]: !prevShowMore[facetId],
    }));
  };

  return (
    <div className="sticks top-0 left-0 p-4 w-52 h-screen mt-40 rounded-lg">
      {listing &&
        listing.facets.map((facet: Facet) => (
          <ExpandableView key={facet.displayName} title={facet.displayName}>
            {facet.options
              // if showMore is true, show all options, else show only 5
              .slice(0, showMore[facet.identifier] ? facet.options.length : 5)
              .map((option: Option) => (
                <div
                  key={option.identifier}
                  className="flex items-center justify-between"
                >
                  <span className="text-black text-sm">
                    {facet.displayName === "Price"
                      ? "£" + option.displayValue
                      : option.displayValue}
                  </span>
                  <Checkbox
                    onChange={(event) => handleSelection(event, option, facet)}
                  />
                </div>
              ))}
            {facet.options.length > 5 && (
              <div className="text-black bg-gray-200 font-bold p-2 text-center">
                <button onClick={() => toggleShowMore(facet.identifier)}>
                  {showMore[facet.identifier] ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </ExpandableView>
        ))}
    </div>
  );
}
