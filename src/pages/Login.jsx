import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../configs/firebase";
import { actionTypes } from "../context api/reducer";
import { useStateValue } from "../context api/StateProvider";
import "../styles/Login.css";

export default function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res?.user,
        });
      })
      .catch((er) => console.log(er));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-768x538.png"
          alt=""
        />
        <img
          src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-2019.jpg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}
