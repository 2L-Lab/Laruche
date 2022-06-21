import { BrowserRouter, Routes, Route } from "react-router-dom";

import Erreur from "./pages/Erreur";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Produits from "./pages/Produits";
import OnePost from "./components/OnePost.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} exact />
          <Route path="/:slug" element={<OnePost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/produit" element={<Produits />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
