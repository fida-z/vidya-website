import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f9f9f9", minHeight: "100vh" }}>
      <header style={{ background: "#2d6a4f", color: "#fff", padding: "2rem 0", textAlign: "center" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Vidya: Rural School Attendance Monitoring</h1>
        <p>Empowering schools to track and improve student attendance in rural areas</p>
      </header>
      <main style={{ maxWidth: "700px", margin: "2rem auto", background: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
        <h2>Welcome!</h2>
        <p>
          Vidya is a platform dedicated to helping rural schools monitor and manage student attendance efficiently.
          Our goal is to ensure every child receives the education they deserve by making attendance tracking simple and accessible.
        </p>
        <ul>
          <li>Easy attendance marking for teachers</li>
          <li>Real-time attendance reports</li>
          <li>Insights to improve student participation</li>
        </ul>
        <p>
          Get started by logging in or exploring our features!
        </p>
      </main>
      <footer style={{ textAlign: "center", padding: "1rem", background: "#2d6a4f", color: "#fff", marginTop: "2rem" }}>
        &copy; {new Date().getFullYear()} Vidya. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
