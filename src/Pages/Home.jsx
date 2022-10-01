import React from "react";
import MainPageFirstCard from "../Components/MainPageFirstCard";
import ProductsCard from "../Components/ProductsCard";
import WhyPluralsightCard from "../Components/WhyPluralsightCard";
import CustomerSaying from "./CustomerSaying";
import ToolsIcon from "./ToolsIcon";
import ProservCard from "./ProservCard";
import Faq from "../Components/Home/Faq";

const Home = () => {
     return (
          <>
               <MainPageFirstCard />
               <WhyPluralsightCard />
               <ProductsCard />
               <ProservCard />
               <ToolsIcon />
               <Faq />
               <CustomerSaying />
          </>
     );
};

export default Home;
