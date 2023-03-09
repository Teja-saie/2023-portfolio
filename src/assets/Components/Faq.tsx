import React from "react";
import MyAccordion from "../HOC/MyAccordion";

const Faq = () => {
  return (
    <div className="w-3/4">
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
  );
};

export default Faq;
