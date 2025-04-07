import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import "./App.css";
import { Navbar } from "./component/navbar";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create-recipe";
import { Home } from "./pages/home";
import { SavedRecipes } from "./pages/saved-recipes";

function App() {
  return (
    <div className="App">
      <Router>
        <CookiesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        </CookiesProvider>
      </Router>
    </div>
  );
}

export default App;