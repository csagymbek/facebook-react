import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App() {
  return <div className="app">
    <Header />
    <div className="app__body">
      <Sidebar />
    </div>
  </div>;
}
