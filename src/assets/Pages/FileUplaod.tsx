// import React from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// const Resume = () => {
//   const [Data, setData] = React.useState<File[]| FileList | null>(null);
//   const inputRef=React.useRef<HTMLInputElement | null>(null)
//   const [UploadProgress, setUploadProgress] = React.useState<String | Number>(
//     0
//   );
//   function handleChange() {
//     let url = "http://localhost:3004/data";
//     let formData = new FormData();
//       if(Data!=null && Data.length>0){
//         for (let i = 0; i < Data?.length; i++) {
//           formData.append('files', Data[i]);
//         }
//       axios
//         .post(url, formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//           onUploadProgress: (progressEvent) => {
//             var { loaded, total = 0 } = progressEvent;
//             let percent = Math.floor((loaded * 100) / total);
//             setUploadProgress(percent);
//           },
//         })
//         .then(data=>console.log("Uploaded files"))
//         .catch((err) => console.log(err));
//       setData(null);
//     }
//   }
//   return (
//     <motion.div initial={{ opacity: 0}}
//     animate={{ opacity: 1}}
//     exit={{ opacity: 0}}
//     transition={{ duration: 2 }} className="flex flex-col justify-center items-center">
//       <h1 className="pb-8 text-4xl text-red-500">Resume Download Feature Goes Here</h1>
//       <div
//         onClick={e=>{inputRef.current!=null && inputRef.current.click()}}
//         className=" h-[200px] border-2 border-dotted border-red-500 w-[75%] text-center"
//         onDragOver={(e) => e.preventDefault()}
//         onDrop={(e) => {
//           e.preventDefault();
//           setData(e.dataTransfer.files);
//           console.log(e.dataTransfer.files,Data)
//         }}>
//         <input type="file" multiple ref={inputRef} hidden onChange={(e) => {e.preventDefault();console.log(e);setData(e.target.files)}}></input>
//         <p>Drag and Drop files or Click here to Select Files</p>
//     </div>
//       <p>{Data!=null &&  Array.from(Data).map(file => {return <span className="block" key={file.name}>{file.name}</span>})}</p>
//         <button onClick={handleChange} className="bg-red-400 text-white text-xl rounded-lg p-4 w-[250px] mt-4">
//           Upload files
//         </button>
//       <>Upload progress is {UploadProgress}</>
      
//     </motion.div>
//   );
// };

// export default Resume;

// // 


// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };


// export default function Cards() {
//   const images = import.meta.globEager('../logos/*.{png,jpg,jpeg,svg}');
//   return (
//     <div className='snap-start text-white'>
//     {/* <h2 className="font-extrabold text-4xl py-4 text-white">Tech Stack I Worked On</h2> */}
//    <div>
//     <Carousel className=' slider-track w-4/5 h-[400px] grid place-content-center text-center animate-none cursor-none'
//       swipeable={true}
//       draggable={true}
//       showDots={false}
//       responsive={responsive}
//       renderArrowsWhenDisabled={true}
//       infinite={true}
//       autoPlay={true}
//       autoPlaySpeed={5000}
//       keyBoardControl={true}
//       customTransition="all 5s"
//       transitionDuration={4000}
//       dotListClass="custom-dot-list-style"
//       containerClass="carousel-container"
//     >
// {Object.keys(images).map((imageName) => (
//           <div key={imageName} className='bg-red'><img key={imageName} src={images[imageName].default} className="w-3/4 object-scale-down bg-center h-[200px] rounded-lg max-h-[200px]"/></div>
//         ))}
// </Carousel>
// </div>
// </div>
//   );
// }