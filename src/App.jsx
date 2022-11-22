import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
