import React from "react";
import MyAccordion from "../HOC/MyAccordion";

const Faq = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-md">
        <MyAccordion
          title="First Accordion is very good accordion i am very happy using it now thanks "
          content={<p>First Accordion Content</p>}
        />
        <MyAccordion
          title="Second Accordion"
          content={<p>Second Accordion Content</p>}
        />
        <MyAccordion
          title="Third Accordion"
          content={<p>Third Accordion Content</p>}
        />
      </div>
    </div>
  );
};

export default Faq;
