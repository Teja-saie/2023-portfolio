
import BannerSection from "../Components/Banner";
import AboutSection from "../Components/AboutSection";
import { motion } from "framer-motion";
import Cards from "../Components/Card";
import ContactForm from "../Components/Forms";
import Footer from "../Components/Footer";
import Faq from "../Components/Faq";
import FlexHoc from "../HOC/Flex";

const Home = () => {

  const pageVariants = {
    initial: {
      opacity: 0,
      x: '-100vw',
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: '100vw',
      scale: 1.2
    }
  };
  
  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
      className="items-center flex flex-col"
    >
    <BannerSection/>
    <AboutSection />  
    <Cards />
    <FlexHoc Prop1={Faq} Prop2={ContactForm} Title="FAQ and My Projects"></FlexHoc>
    {/* <FlexHoc Prop1={ContactForm} Prop2={ContactForm}></FlexHoc> */}
    <Footer/>
    </motion.div>
  );
};

export default Home;
