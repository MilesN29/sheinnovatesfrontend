import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); //React is so dumb bc why cant i jsut call useNavigate

  return (
    <div className="home">
      Actaully do user auth through clerk. for now, just click button to assume
      loged in as valid user
      <button onClick={() => navigate("/startup")}>Startup</button>
    </div>
  );
}

export default Home;
