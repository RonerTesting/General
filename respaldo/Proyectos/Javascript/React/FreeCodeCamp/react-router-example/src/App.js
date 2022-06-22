import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
