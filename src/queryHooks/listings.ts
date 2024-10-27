import { useMutation } from "@tanstack/react-query";
import { getListing } from "../../API";
import { useSearchStore } from "./searchStore";
import { getListingTypes } from "../types";

export const useGetListing = () => {
  const searchStore = useSearchStore();
  const data = {
    query: "toilets",
    pageNumber: searchStore.pageNumber,
    size: searchStore.size,
    additionalPages: searchStore.additionalPages,
    sort: +searchStore.sort,
    facets: searchStore.facetSearch,
  };
  const {
    mutate,
    data: listing,
    isError,
    isPending,
  } = useMutation({
    mutationKey: ["listing"],
    mutationFn: () =>
      getListing({ body: data as unknown as getListingTypes }).then((res) => {
        return res;
      }),
  });
  return { mutate, listing, isError, isPending };
};
