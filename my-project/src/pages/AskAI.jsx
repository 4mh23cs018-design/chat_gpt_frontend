import React, { useState } from "react";

const AskAI = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAskAI = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          system_prompt: "You are a helpful assistant.",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(data.response);
      } else {
        setError("Something went wrong!");
      }
    } catch (err) {
      setError("Server not reachable. Make sure FastAPI is running.");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🤖 Ask AI</h2>

        <form onSubmit={handleAskAI}>
          <textarea
            placeholder="Type your question here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            {loading ? "Thinking..." : "Ask AI"}
          </button>
        </form>

        {response && (
          <div style={styles.responseBox}>
            <h4>AI Response:</h4>
            <p>{response}</p>
          </div>
        )}

        {error && <p style={styles.error}>{error}</p>}
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
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    width: "500px",
    padding: "30px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#667eea",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  responseBox: {
    marginTop: "20px",
    padding: "15px",
    background: "#f4f6ff",
    borderRadius: "8px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default AskAI;
