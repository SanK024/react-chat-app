import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { option } from "./options";
import { loadFull } from "tsparticles";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => option, []);

  return (
    <>
      <div className="formContainer">
        <Particles
          className="particles-js"
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div className="formWrapper">
          <span className="logo">MinionVerse</span>
          <span className="title">Login</span>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign in</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p>
            Not been here? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
