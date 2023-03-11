import React from "react";
import MyAccordion from "../HOC/MyAccordion";

const Faq = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-md">
        <MyAccordion
          title="First Accordion is very good accordion i am very happy using it now thanks "
          content="First Accordion Content"
        />
        <MyAccordion
          title="Second Accordion"
          content="Second Accordion Content"
        />
        <MyAccordion
          title="Third Accordion"
          content="Third Accordion Content"
        />
      </div>
    </div>
  );
};

export default Faq;
