import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Rank from "./Rank";

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Page1/>} />
         <Route path="/page2" element={<Page2/>}/>
         <Route path="/page3" element={<Page3/>}/>
         <Route path="/rank" element={<Rank/>}/>
       </Routes>
      </BrowserRouter>
    );
  };
}

export default App;
