import { useMutation, useQuery } from "@tanstack/react-query";
import { getListing } from "../../API";
import { useSearchStore } from "./searchStore";

interface Listing {
  query: String;
  pageNumber: Number;
  size: Number;
  additionalPages: Number;
  sort: Number;
}

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
      getListing({ body: data }).then((res) => {
        return res;
      }),
  });
  return { mutate, listing, isError, isPending };
};
