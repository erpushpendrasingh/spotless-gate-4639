import React from "react";
import { Routes, Route } from "react-router-dom";
import Flow from "./Home/Flow";
import Home from "../Pages/Home";
import CourseLayout from "./Courses/CourseLayout";
import Login from "./Login/Login";
import { Heading } from "@chakra-ui/react";
import DetailsPageLayout from "../Details/DetailsPageLayout";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/skills" element={<CourseLayout />}></Route>
        <Route path="/flow" element={<Flow />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/detailsPage" element={<DetailsPageLayout />}></Route>
        <Route path="*" element={<Heading>Error</Heading>}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
