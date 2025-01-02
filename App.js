import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to My Simple React Website</h1>
        <p>This is a basic website created using React.</p>
      </main>
      <Footer />
    </div>
  );
}
