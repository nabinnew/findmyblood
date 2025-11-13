import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import BloodDonorPage from "./pages/BloodDonorPage";
import Footer from "./components/Footer";
import SearchBlood from "./pages/SearchBlood";

const App = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donor" element={<BloodDonorPage />} />
        <Route path="/search" element={<SearchBlood />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
