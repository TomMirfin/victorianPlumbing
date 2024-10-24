import { useEffect } from "react";
import { useGetListing } from "../queryHooks.tsx/listings";

export default function Home() {
  const { mutate: searchListing, listing } = useGetListing();

  useEffect(() => {
    searchListing({
      query: "toilets",
      pageNumber: 0,
      size: 0,
      additionalPages: 0,
      sort: 1,
    });
  }, []);
  console.log(listing);
  return <div>Home</div>;
}
