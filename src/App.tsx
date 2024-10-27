import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toilets from "./screens/Toilets";
import FilterComponent from "./components/FilterComponent";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="grid grid-cols-4 h-screen">
          <div className="col-span-1">
            <FilterComponent />
          </div>
          <div className="col-span-3">
            <Routes>
              <Route path="/toilets" element={<Toilets />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
