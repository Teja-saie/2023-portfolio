// import image from "../images/new.webp";
import image from "../images/sidebar-image.svg";

function AboutSection(){

  return (
    <div className="flex flex-col lg:flex-row bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 flex-wrap snap-start">
        <div className="lg:w-1/2 p-10 h-full">
          <h2 className="font-extrabold text-6xl py-4 text-fifth">
            About Me
          </h2>
          <p className="text-white ">
            <span className="block pt-3">
              Welcome to my portfolio! As a web developer, I have experience in
              designing and developing websites that are both visually appealing
              and functional. My approach to web development involves a
              combination of technical expertise and creative problem-solving
              skills, which allows me to deliver high-quality results that meet
              the needs of my clients. My skillset includes proficiency in HTML,
              CSS, JavaScript, jQuery, Typescript and React js. I have
              experience building websites from scratch as well as working on
              node js backend.        
            </span>
            <span className="block pt-3">
              Additionally, I am knowledgeable about responsive design and
              cross-browser compatibility, ensuring that your website looks
              great on any device or platform. One of my recent projects
              involved designing and developing a dashboard for clients.
              The client wanted a dashboard that would showcase their products and
              services, as well as provide analytics about their business and
              contact details. I worked closely with the client to understand
              their requirements and preferences, and delivered a website that
              exceeded their expectations.
            </span>
            <span className="block pt-3">
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
            <span className="block pt-3">
              Overall, I am confident in my abilities as a web developer and
              look forward to working with you to bring your ideas to life.
              Please feel free to explore my portfolio and get in touch if you
              have any questions or if you would like to discuss a project.
            </span>
          </p>
        </div>
        <div className="lg:w-1/2 right-0 justify-center items-center flex">
          <img className="bg-auto h-4/5" src={image} />
        </div>
      </div>
  )
}

export default AboutSection