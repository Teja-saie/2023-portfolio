import React from "react";
import MyAccordion from "../HOC/MyAccordion";

const Faq = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-md">
        <MyAccordion
          title="Why should we hire you for a MERN stack developer role?"
          content="I believe I would be an ideal candidate for the MERN stack developer role because I have a strong background in web development and extensive experience working with the MERN stack. I have a deep understanding of React, Node.js, Express, and MongoDB and have built several successful applications using these technologies. In my previous roles, I have worked on various projects that involve designing and implementing scalable and responsive web applications, building APIs, and integrating third-party APIs. "
        />
        <MyAccordion
          title="What experience do you have with the MERN stack?"
          content="I have 4 years of experience working with the MERN stack, during which I have built various applications. My experience with each of the technologies in the MERN stack has allowed me to create scalable, efficient, and responsive applications that meet or exceed customer expectations"
        />
      </div>
    </div>
  );
};

export default Faq;
