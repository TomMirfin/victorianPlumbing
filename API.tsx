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
  };
}

export const getListing = async ({ body }: Listing) => {
  const { query, pageNumber, size, additionalPages, sort } = body;

  try {
    const response = await API.post("", {
      query: query,
      pageNumber: pageNumber,
      size: size,
      additionalPages: additionalPages,
      sort: sort,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
