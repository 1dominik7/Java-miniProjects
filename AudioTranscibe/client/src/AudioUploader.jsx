import React, { useState } from "react";
import axios from "axios";

const AudioUploader = () => {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5454/api/transcribe", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTranscription(res.data);
    } catch (error) {
      console.error("Error transcribing audio", error);
    }
  };

  return (
    <div className="container">
      <h1>Audio to text transcriber</h1>
      <div className="file-input">
        <input type="file" accept="audio/*" onChange={handleFileChange} />
      </div>
      <button className="upload-button" onClick={handleUpload}>
        Upload and Transcribe
      </button>
      <div className="transcription-result">
        <h2>Transcription Result</h2>
        <p>{transcription}</p>
      </div>
    </div>
  );
};

export default AudioUploader;
