import React from 'react'
import Carousel from "nuka-carousel"

const Projects = () => {
  const projectsData = [
    {
      title: "Dashboard",
      role:
        "Dorothy Orem was a nursing theorist who developed the Self-Care Deficit Theory. This theory posits that individuals have a natural desire to care for themselves, but may require assistance in doing so if they are unable to meet their own self-care needs. According to Orem, nursing should aim to facilitate the individual's ability to engage in self-care, and should provide the necessary support to help them do so.Orem's theory is based ",
    },
    {
      title: "Analytics",
      role: "Analyzing data and creating reports for stakeholders",
    },
    {
      title: "Design",
      role:
        "Designing and implementing new UI features for web and mobile apps",
    },
    {
      title: "Testing",
      role:
        "Writing and executing test scripts for web and mobile apps",
    },
  ];
  return (
    <Carousel autoplay={true} autoplayInterval={2000} autoplayReverse={true} dragging={true} withoutControls={true}>
      {projectsData.map(item=>(<div key={item.title} className='bg-white text-center w-[80%] px-3 py-4 rounded-lg h-full'><h1>{item.title}</h1><p>{item.role}</p></div>))}
    </Carousel>
  )
}

export default Projects