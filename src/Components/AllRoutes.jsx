import React from "react";
import { Routes, Route } from "react-router-dom";
import ForIndividuals from "./ForIndividuals";
import Products from "./Products";
import Resources from "./Resources";
import Solutions from "./Solutions";

const AllRoutes = () => {
     return (
          <>
               <Routes>
                    <Route path="Products" element={<Products />}></Route>
                    <Route path="Products" element={<Solutions />}></Route>
                    <Route path="Products" element={<Resources />}></Route>
                    <Route path="Products" element={<ForIndividuals />}></Route>
               </Routes>
          </>
     );
};

export default AllRoutes;
