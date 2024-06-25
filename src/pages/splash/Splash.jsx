import "./Splash.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function AnimatedSplash() {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

function Splash() {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 1000);

  return redirect ? <Navigate to="/home" /> : <AnimatedSplash />;
}

export default Splash;
