import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); //React is so dumb bc why cant i jsut call useNavigate

  return <div className="login">Clerk</div>;
}

export default Login;
