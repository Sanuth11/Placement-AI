import React, { useState } from "react";
import API from "../api/api";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;

    const userMessage = { role: "user", content: message };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const res = await API.post("/chat", { message });
      const aiMessage = { role: "ai", content: res.data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <section className="glass-card rounded-[2rem] border-white/10 p-8 shadow-2xl">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-300">AI career chat</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Ask the AI anything about your career journey.</h1>
            <p className="mt-4 text-slate-300">Get quick answers for resumes, interviews, job search, and career strategy.</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-5 text-slate-300 border border-white/10 shadow-lg">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Live chat</p>
            <p className="mt-3 text-2xl font-semibold text-white">Instant insight</p>
          </div>
        </div>

        <div className="mt-8 flex min-h-[60vh] flex-col rounded-[1.8rem] border border-slate-800 bg-slate-950/90 p-5 shadow-inner">
          <div className="custom-scroll flex-1 space-y-4 overflow-y-auto pr-2">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-3xl px-5 py-4 text-sm leading-6 ${msg.role === "user" ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white" : "bg-slate-800 text-slate-200"}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && <div className="text-slate-400">AI typing...</div>}
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something career-related..."
              className="flex-1 rounded-full border border-slate-700 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
            <button
              onClick={sendMessage}
              disabled={!message}
              className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-4 text-white shadow-2xl shadow-indigo-500/20 transition hover:shadow-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chat;
