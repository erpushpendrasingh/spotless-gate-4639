import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainPageFirstCard from "./Components/MainPageFirstCard";
import WhyPluralsightCard from "./Components/WhyPluralsightCard";
import ReadyToGetStartedCard from "./Pages/ReadyToGetStartedCard";
import ToolsIcon from "./Pages/ToolsIcon";
import ProductsCard from "./Components/ProductsCard";
import ProservCard from "./Pages/ProservCard";
import CustomerSaying from "./Pages/CustomerSaying";
import Course from "./Components/Courses/Course";
import AirbnbCard from "./Components/Courses/CourseCard";
import CourseSection from "./Components/Courses/CourseSection";
import DetailsPage from "./Details/DetailsPage";
import CourseAccordion from "./Components/Courses/LeftAcordian";
import SkillBox from "./Details/SkillBox";
import Paragraph from "./Details/Paragraph";
import AboutTheAuthor from "./Details/AboutTheAuthor";
import ReadyToUpskill from "./Details/ReadyToUpskill";
import Navbar from "./Components/Home/Navbar";
import Faq from "./Components/Home/Faq";
import Home from "./Pages/Home";

function App() {
     return (
          <>
               {" "}
               {/* <Test /> */}
               <Navbar />
               <Header />
               <Home />
               <Footer />
               {/* <PluralSightOne /> */}
               {/* <ReadyToGetStartedCard /> */}
               {/* <Course /> */}
               {/* <CourseSection />
               <CourseAccordion />
               <AirbnbCard />
               <DetailsPage />
               <SkillBox />
               <Paragraph />
               <AboutTheAuthor />
               <ReadyToUpskill />
               <Faq /> */}
          </>
     );
}

export default App;
