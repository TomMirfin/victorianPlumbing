import Axios from "axios";
import { getListingTypes } from "./src/types";
export const API = Axios.create({
  baseURL:
    "https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getListing = async ({ body }: { body: getListingTypes }) => {
  const { query, pageNumber, size, additionalPages, sort, facets } = body;

  const data = {
    query: query,
    pageNumber: pageNumber,
    size: size,
    additionalPages: additionalPages,
    sort: sort,
    facets: facets,
  };

  try {
    const response = await API.post("", data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
