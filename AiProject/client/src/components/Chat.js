import React, { useState } from "react";

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const askAI = async () => {
    try {
      const res = await fetch(`http://localhost:5454/ask-ai?prompt=${prompt}`);
      const data = await res.text();
      setChatResponse(data);
    } catch (error) {
      console.error("Error generating chat: ", error);
    }
  };

  return (
    <div>
      <h2>Talk to AI</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt for AI"
      />
      <button onClick={askAI}>Ask AI</button>
      <div className="output">
        <p>{chatResponse}</p>
      </div>
    </div>
  );
};

export default Chat;
