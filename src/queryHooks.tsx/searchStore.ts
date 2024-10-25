import { create } from "zustand";

interface SearchStore {
  query: string;
  pageNumber: number;
  size: number;
  additionalPages: number;
  sort: string;
  setQuery: (query: string) => void;
  setPageNumber: (pageNumber: number) => void;
  setSize: (size: number) => void;
  setAdditionalPages: (additionalPages: number) => void;
  setSort: (sort: string) => void;
  facetSearch: [];
  setFacetSearch: (facetSearch: []) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  query: "",
  pageNumber: 1,
  size: 10,
  additionalPages: 1,
  sort: "1",
  facetSearch: {},
  setQuery: (query: string) => set({ query }),
  setPageNumber: (pageNumber: number) => set({ pageNumber }),
  setSize: (size: number) => set({ size }),
  setAdditionalPages: (additionalPages: number) => set({ additionalPages }),
  setSort: (sort: string) => set({ sort }),
  setFacetSearch: (facetSearch: []) => set({ facetSearch }),
}));
