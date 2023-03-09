
import BannerSection from "../Components/Banner";
import AboutSection from "../Components/AboutSection";
import { motion } from "framer-motion";
import Cards from "../Components/Card";
import ContactForm from "../Components/Forms";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="items-center flex flex-col"
    >
    <BannerSection/>
    <AboutSection />  
    <Cards />
    <Footer/>
    </motion.div>
  );
};

export default Home;
