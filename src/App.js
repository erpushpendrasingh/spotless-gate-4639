import "./App.css";
import PluralSightOne from "./Pages/PluralSightOne";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Test from "./Components/ButtonCard";
import MainPageFirstCard from "./Components/MainPageFirstCard";
import WhyPluralsightCard from "./Components/WhyPluralsightCard";
import ReadyToGetStartedCard from "./Pages/ReadyToGetStartedCard";
import ToolsIcon from "./Pages/ToolsIcon";
import ProductsCard from "./Components/ProductsCard";
import ProservCard from "./Pages/ProservCard";
import CustomerSaying from "./Pages/CustomerSaying";

function App() {
     return (
          <>
               {/* <Test /> */}
               <Header />
               <MainPageFirstCard />
               <WhyPluralsightCard />
               <ProductsCard />
               <ProservCard />
               {/* <Feature /> */}
               <CustomerSaying />
               <PluralSightOne />
               <ReadyToGetStartedCard />
               <ToolsIcon />
          </>
     );
}

export default App;
