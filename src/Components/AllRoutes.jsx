import React from "react";
import { Routes, Route } from "react-router-dom";
import Pluralsight from "./Home/Pluralsight";
import Skills from "./Home/Skills";
import Flow from "./Home/Flow";
import Blog from "./Home/Blog";
import SignIn from "./Home/SignIn";
const AllRoutes = () => {
     return (
          <>
               <Routes>
                    <Route path="/" element={<Pluralsight />}></Route>
                    <Route path="/skills" element={<Skills />}></Route>
                    <Route path="/flow" element={<Flow />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/signin" element={<SignIn />}></Route>
               </Routes>
          </>
     );
};

export default AllRoutes;
