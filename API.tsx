import Axios from "axios";

export const API = Axios.create({
  baseURL:
    "https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI",
  headers: {
    "Content-Type": "application/json",
  },
});

interface Listing {
  body: {
    query: String;
    pageNumber: Number;
    size: Number;
    additionalPages: Number;
    sort: Number;
    facets: any;
  };
}

export const getListing = async ({ body }: Listing) => {
  const { query, pageNumber, size, additionalPages, sort, facets } = body;
  console.log(facets, "facets");
  const data = {
    query: query,
    pageNumber: pageNumber,
    size: size,
    additionalPages: additionalPages,
    sort: sort,
    facets: facets,
  };

  console.log(data, "data");

  try {
    const response = await API.post("", data);
    console.log(response.data, "response");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
