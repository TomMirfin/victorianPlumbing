import { useMutation, useQuery } from "@tanstack/react-query";
import { getListing } from "../../API";

interface Listing {
  query: String;
  pageNumber: Number;
  size: Number;
  additionalPages: Number;
  sort: Number;
}

export const useGetListing = () => {
  const {
    mutate,
    data: listing,
    isError,
    isPending,
  } = useMutation({
    mutationKey: ["listing"],
    mutationFn: (data: Listing) =>
      getListing({ body: data }).then((res) => {
        return res;
      }),
  });
  return { mutate, listing, isError, isPending };
};
