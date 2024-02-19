import React, { useEffect, useMemo } from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { option } from "./options";
import { loadFull } from "tsparticles";


const Home = () => {

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
    <div className='home'>
      <Particles
        className="particles-js"
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home