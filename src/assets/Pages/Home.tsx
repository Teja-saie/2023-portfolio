
import BannerSection from "../Components/Banner";
import AboutSection from "../Components/AboutSection";
import { motion } from "framer-motion";
import Cards from "../Components/Card";
import ContactForm from "../Components/Forms";
import Faq from "../Components/Faq";
import FlexHoc from "../HOC/Flex";
import Projects from "../Components/Projects";
import Socialmedia from "../Components/Socialmedia";

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
      {/* <Cards /> */}
      <FlexHoc Prop1={Projects} Prop2={Faq}></FlexHoc>
      <FlexHoc Prop1={Socialmedia} Prop2={ContactForm} ></FlexHoc>
    </motion.div>
  );
};

export default Home;
