import "./App.css";
import {Routes,Route} from "react-router-dom"
import React from "react";
import AddFav from "./pages/Add/Add";
import Index from "./pages/Index/Index"
import Ass from "./pages/assi";
function App() {
 
  return (
    <>
      {/* <Routes>
        <Route path="/addfav" element={<AddFav />}></Route>
        <Route path="/" element={<Index/>}></Route>
      </Routes> */}
      <Ass/>
    </>
  );
}

export default App;
