import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import landing from "./pages/landing.jsx";
import categories from "./pages/categories.jsx";
import company from "./pages/company.jsx";
import portfolio from "./pages/portfolio.jsx";
import resources from "./pages/resources.jsx";
import navbar from "./components/navbar.jsx";
import footer from "./components/footer.jsx";
import './App.css';

const App = () => {
  return (
      <BrowserRouter>
       {/* <Navbar /> */}
          <Routes>
              <Route path="/" element={<landing />} />
              <Route path="/categories" element={<categories />} />
              <Route path="/company" element={<company />} />
              <Route path="/portfolio" element={<portfolio />} />
              <Route path="/resources" element={<resources />} />
              {/* <Route path="/createWithUs" element={<createWithUs />} /> */}
          </Routes>
      </BrowserRouter>
  )
};

export default App;
