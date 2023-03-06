import React from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Resume = () => {
  const [Data, setData] = React.useState<File[]| FileList | null>(null);
  const inputRef=React.useRef<HTMLInputElement | null>(null)
  const [UploadProgress, setUploadProgress] = React.useState<String | Number>(
    0
  );
  function handleChange() {
    let url = "http://localhost:3004/data";
    let formData = new FormData();
      if(Data!=null && Data.length>0){
        for (let i = 0; i < Data?.length; i++) {
          formData.append('files', Data[i]);
        }
      axios
        .post(url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            var { loaded, total = 0 } = progressEvent;
            let percent = Math.floor((loaded * 100) / total);
            setUploadProgress(percent);
          },
        })
        .then(data=>console.log("Uploaded files"))
        .catch((err) => console.log(err));
      setData(null);
    }
  }
  return (
    <motion.div initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    transition={{ duration: 2 }} className="flex flex-col justify-center items-center">
      <h1 className="pb-8 text-4xl text-red-500">Resume Download Feature Goes Here</h1>
      <div
        onClick={e=>{inputRef.current!=null && inputRef.current.click()}}
        className=" h-[200px] border-2 border-dotted border-red-500 w-[75%] text-center"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          setData(e.dataTransfer.files);
          console.log(e.dataTransfer.files,Data)
        }}>
        <input type="file" multiple ref={inputRef} hidden onChange={(e) => {e.preventDefault();console.log(e);setData(e.target.files)}}></input>
        <p>Drag and Drop files or Click here to Select Files</p>
    </div>
      <p>{Data!=null &&  Array.from(Data).map(file => {return <span className="block" key={file.name}>{file.name}</span>})}</p>
        <button onClick={handleChange} className="bg-red-400 text-white text-xl rounded-lg p-4 w-[250px] mt-4">
          Upload files
        </button>
      <>Upload progress is {UploadProgress}</>
    </motion.div>
  );
};

export default Resume;