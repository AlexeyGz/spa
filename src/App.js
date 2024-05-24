import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Footer } from "./components/footer";
import {Header} from "./components/header"
import { Category } from "./pages/category";
import { Recipe } from "./pages/recipe";

function NoMatch(){
  let location = useLocation();
  return (
    <div>
      <h1>Oops!</h1>
      <h3>Sorry, an unexpencted error has occured.</h3>
      <h5>Does not exist: {location.pathname}</h5>
    </div>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <main className="contaner content">
          <Routes >
            <Route path="*" element={<NoMatch />}></Route>
            <Route path="/" element={<Home/>}/>
            <Route path="contact/" element={<Contact/>}/>
            <Route path="about/" element={<About/>}/>
            <Route path="category/:name" element={<Category/>}/>
            <Route path="meal/:id" element={<Recipe/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
