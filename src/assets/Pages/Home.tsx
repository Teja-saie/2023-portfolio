import Banner from "../images/Banner.jpg";
import { motion } from "framer-motion";
import ActionAreaCard from "../Components/Card";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'
import Loader from "../Components/Loader";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className=""
    >
      <div className="flex flex-col lg:flex-row bg-opacity-10 backdrop-filter backdrop-blur-lg p-4">
        <div className="lg:w-1/2 p-10">
          <h1 className="font-extrabold text-6xl py-4 text-fifth">
            Welcome to my portfolio
          </h1>
          <p className="text-white">
            <span>
              Welcome to my portfolio! As a web developer, I have experience in
              designing and developing websites that are both visually appealing
              and functional. My approach to web development involves a
              combination of technical expertise and creative problem-solving
              skills, which allows me to deliver high-quality results that meet
              the needs of my clients. My skillset includes proficiency in HTML,
              CSS, JavaScript, jQuery, Bootstrap, and React js. I have
              experience building websites from scratch as well as working on
              node js backend
            </span>
            <br />
            <span>
              Additionally, I am knowledgeable about responsive design and
              cross-browser compatibility, ensuring that your website looks
              great on any device or platform. One of my recent projects
              involved designing and developing a website for a small business.
              The client wanted a website that would showcase their products and
              services, as well as provide information about their business and
              contact details. I worked closely with the client to understand
              their requirements and preferences, and delivered a website that
              exceeded their expectations.
            </span>
            <br />
            <span>
              In addition to my technical skills, I am a great communicator and
              team player. I believe that collaboration and open communication
              are essential for delivering successful projects. I am always
              eager to learn and stay up-to-date with the latest technologies
              and trends in web development. Overall, I am confident in my
              abilities as a web developer and look forward to working with you
              to bring your ideas to life. Please feel free to explore my
              portfolio and get in touch if you have any questions or if you
              would like to discuss a project.
            </span>
            <br />
            <span>
              Overall, I am confident in my abilities as a web developer and
              look forward to working with you to bring your ideas to life.
              Please feel free to explore my portfolio and get in touch if you
              have any questions or if you would like to discuss a project.
            </span>
          </p>
        </div>
        <div className="lg:w-1/2 right-0 justify-center flex">
          <img className="h-full" src={Banner} />
        </div>
      </div>
        <ScrollContainer className="grid grid-flow-col auto-cols-[22%] overflow-x-auto">
          <ActionAreaCard bg={Banner} text={"HTML"}/>
          <ActionAreaCard bg={Banner} text={"CSS"}/>
          <ActionAreaCard bg={Banner} text={"Javascript"}/>
          <ActionAreaCard bg={Banner} text={"React Js"}/>
          <ActionAreaCard bg={Banner} text={"Node Js"}/>
          <ActionAreaCard bg={Banner} text={"Express Js"}/>
          <ActionAreaCard bg={Banner} text={"Jquery"}/>
          </ScrollContainer>
    </motion.div>
  );
};

export default Home;
