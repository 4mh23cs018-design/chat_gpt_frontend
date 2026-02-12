import React, { useState, useRef, useEffect } from "react";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          system_prompt: "You are a helpful assistant.",
        }),
      });

      const data = await res.json();

      const aiMessage = {
        sender: "ai",
        text: data.response,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Server error. Try again." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        <div style={styles.messages}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={
                msg.sender === "user"
                  ? styles.userMessage
                  : styles.aiMessage
              }
            >
              {msg.text}
            </div>
          ))}

          {loading && <div style={styles.aiMessage}>Thinking...</div>}

          <div ref={bottomRef} />
        </div>

        <form onSubmit={sendMessage} style={styles.inputArea}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f9",
  },
  chatBox: {
    width: "500px",
    height: "80vh",
    background: "#fff",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  messages: {
    flex: 1,
    padding: "15px",
    overflowY: "auto",
  },
  userMessage: {
    alignSelf: "flex-end",
    background: "#4f46e5",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "20px",
    marginBottom: "10px",
    maxWidth: "70%",
  },
  aiMessage: {
    alignSelf: "flex-start",
    background: "#e5e7eb",
    padding: "10px 15px",
    borderRadius: "20px",
    marginBottom: "10px",
    maxWidth: "70%",
  },
  inputArea: {
    display: "flex",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "12px",
    border: "none",
    outline: "none",
  },
  button: {
    padding: "12px 20px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default Chat;
