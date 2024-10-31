import { useMutation } from "@tanstack/react-query";
import { getListing } from "../../API";
import { useSearchStore } from "./searchStore";
import { getListingTypes } from "../types";
import { useSearchParams } from "react-router-dom";

export const useGetListing = () => {
  const [searchParams] = useSearchParams();
  const searchStore = useSearchStore();
  const data = {
    query: searchStore.query,
    pageNumber: searchStore.pageNumber,
    size: searchStore.size,
    additionalPages: searchStore.additionalPages,
    sort: +searchParams.get("sort"),
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
