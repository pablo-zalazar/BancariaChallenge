import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Details from "./pages/details/Details";
import Favorites from "./pages/favorites/Favorites";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detalles/:id" element={<Details />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
