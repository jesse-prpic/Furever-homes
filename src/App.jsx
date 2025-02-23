import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Favourites from "./pages/Favourites";
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";

function App() {
  // Sample pet data
  const [pets, setPets] = useState([
    { id: 1, name: "Bella", age: 3, breed: "Golden Retriever", photo: "https://via.placeholder.com/150", isFavourite: false },
    { id: 2, name: "Charlie", age: 2, breed: "Beagle", photo: "https://via.placeholder.com/150", isFavourite: false },
    { id: 3, name: "Lucy", age: 5, breed: "Tabby Cat", photo: "https://via.placeholder.com/150", isFavourite: false },
  ]);

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/explore" element={<Explore pets={pets} setPets={setPets} />} />
          <Route path="/favourites" element={<Favourites pets={pets} />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;