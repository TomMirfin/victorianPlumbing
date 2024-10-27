# Tom Mirfin Grid Task

## - Entry to the app is via localhost/toilets

### Starting the project

- npm run dev to start the server

### Tech stack used:

- **React**
- **Tailwind**
- **Zustand**
- **Tanstack Query**
- **Axios**

---

### Tailwind

I used Tailwind for ease of use on a growing project. In a live project situation, I would set up custom components for consistency and maintainability.

### Zustand

As the project grows, using a state management system like Zustand would ensure a clean codebase and prevent excessive prop drilling.

### Tanstack Query

Though not fully utilized here, Tanstack Query’s caching and optimistic rendering features would be beneficial as the project scales.

#### Next Steps:

- Unable to track in stock or not, I can only see StockStatus "G" in the JSON
- Dynamic url for pagination/filtering

#### Note:

Currently performing multiple renders on load, I believe this is due to useGetListings hook being called in multiple places
