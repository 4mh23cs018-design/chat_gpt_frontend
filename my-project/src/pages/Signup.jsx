import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      alert("Signup successful 🎉 Please login!");
      // window.location.href = "/login";

    } catch (error) {
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Create Account ✨</h2>
        <p style={styles.subtitle}>Join us and get started</p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        <p style={styles.footer}>
          Already have an account? <span style={styles.link}>Login</span>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
  },
  card: {
    background: "#fff",
    padding: "2.5rem",
    borderRadius: "14px",
    width: "340px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "0.3rem",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#666",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#43cea2",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  footer: {
    marginTop: "1rem",
    textAlign: "center",
    fontSize: "14px",
  },
  link: {
    color: "#185a9d",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Signup;
