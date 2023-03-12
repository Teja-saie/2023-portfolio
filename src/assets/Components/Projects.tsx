import React from "react";
import Carousel from "nuka-carousel";

const Projects = () => {
  const projectsData = [
    {
      title: "Dashboard",
      role:"Developing new features and mainting exising code base which is developed using MERN stack, I have also worked on Node js and ongoose in this project"
    },
    {
      title: "Analytics",
      role: "Analyzing data and creating reports for stakeholders",
    },
    {
      title: "Design",
      role: "Designing and implementing new UI features for web and mobile apps",
    },
    {
      title: "Testing",
      role: "Writing and executing test scripts for web and mobile apps",
    },
  ];
  return (
    <Carousel
      autoplay={true}
      autoplayInterval={4000}
      wrapAround={true}
      dragging={true}
      withoutControls={true}
    >
      {projectsData.map((item) => (
        <div
          key={item.title}
          className="text-white text-center px-3 py-4 h-full rounded-3xl w-full flex flex-col justify-center"
        >
          <h1 className="text-3xl text-third pb-5">{item.title}</h1>
          <p className="text-clip  text-white">{item.role}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Projects;
