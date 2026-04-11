import React, { useState } from "react";
import API from "../api/api";

const Chat = () => {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {

    if (!message) return;

    const userMessage = {
      role: "user",
      content: message
    };

    setMessages([...messages, userMessage]);
    setMessage("");
    setLoading(true);

    try {

      const res = await API.post("/chat", {
        message
      });

      const aiMessage = {
        role: "ai",
        content: res.data.reply
      };

      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-col">

      <h2 className="text-2xl font-bold mb-4">
        AI Career Assistant
      </h2>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto bg-white p-4 rounded shadow">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`mb-4 ${
              msg.role === "user"
                ? "text-right"
                : "text-left"
            }`}
          >

            <div
              className={`inline-block p-3 rounded-lg ${
                msg.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {msg.content}
            </div>

          </div>

        ))}

        {loading && (
          <div className="text-gray-500">
            AI typing...
          </div>
        )}

      </div>

      {/* Input */}
      <div className="flex mt-4">

        <input
          type="text"
          className="flex-1 border p-2 rounded"
          placeholder="Ask something..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-500 text-white px-4 rounded"
        >
          Send
        </button>

      </div>

    </div>
  );
};

export default Chat;