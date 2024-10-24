import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toilets from "./screens/Toilets";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toilets" element={<Toilets />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
