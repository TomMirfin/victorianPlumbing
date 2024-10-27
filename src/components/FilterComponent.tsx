import { useEffect, useState } from "react";
import { useGetListing } from "../queryHooks/listings";
import ExpandableView from "./ExpandableView";
import { Checkbox } from "@mui/material";
import { useSearchStore } from "../queryHooks/searchStore";
import { Facet, Option } from "../types";
export default function FilterComponent() {
  const { mutate: searchListing, listing } = useGetListing();
  const setFacetSearch = useSearchStore((state) => state.setFacetSearch);
  const facetSearch = useSearchStore((state) => state.facetSearch);

  const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({});

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

  const toggleShowMore = (facetId: string) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [facetId]: !prevShowMore[facetId],
    }));
  };

  return (
    <div className="sticks top-0 left-0 p-4 w-52 h-screen mt-40 rounded-lg">
      {listing &&
        listing.facets.map(
          (facet: Facet) => (
            console.log(facet),
            (
              <ExpandableView key={facet.displayName} title={facet.displayName}>
                {facet.options
                  .slice(
                    0,
                    showMore[facet.identifier] ? facet.options.length : 5
                  )
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
                        onChange={(event) =>
                          handleSelection(event, option, facet)
                        }
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
            )
          )
        )}
    </div>
  );
}
