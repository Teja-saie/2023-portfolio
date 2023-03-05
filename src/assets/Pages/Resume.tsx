import React from "react";
import axios from "axios";

const Resume = () => {
  const inputRef = React.useRef<null | HTMLInputElement>(null);
  const [Data, setData] = React.useState<Blob | null>(null);
  const [UploadProgress, setUploadProgress] = React.useState<String | Number>(
    0
  );

  function FileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);
    if (e.target.files) {
      setData(e.target.files[0]);
    }
  }
  function handleChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let url = "http://localhost:3004/data";
    let formData = new FormData();
    if (Data != null && inputRef.current != null) {
      formData.append("file", Data);
      axios
        .post(url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            var { loaded, total = 0 } = progressEvent;
            let percent = Math.floor((loaded * 100) / total);
            setUploadProgress(percent);
          },
        })
        .catch((err) => console.log(err));
      setData(null);
      inputRef.current.value = "";
    }
  }
  return (
    <div>
      <h1>Resume Download Feature Goes Here</h1>
      <div
        className="h-[200px] border-2 border-sky-500"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          setData(e.dataTransfer.files);
        }}
      >
        <button
          onClick={() => {
            let formData = new FormData();
            console.log(Data);
            for (let i = 0; i < Data.length; i++) {
              formData.append('files', Data[i]);
            }
            axios.post("http://localhost:3004/data", formData, {
              headers: { "Content-Type": "multipart/form-data" },
            });
          }}
        >
          Upload files
        </button>
      </div>
      <form onSubmit={handleChange}>
        <input
          type="file"
          onChange={FileUpload}
          accept=".jpg, .jpeg, .png,.txt,.pdf,video/*"
          ref={inputRef}
        />
        <input type="submit"></input>
      </form>
      <>Upload progress is {UploadProgress}</>
    </div>
  );
};

export default Resume;