import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import { useStateValue } from "./context api/StateProvider";
import Login from "./pages/Login";

export default function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
