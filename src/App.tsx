import { BrowserRouter, Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toilets from "./screens/Toilets";
import FilterComponent from "./components.tsx/FilterComponent";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FilterComponent />
        <Routes>
          <Route path="/" element={<Toilets />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
