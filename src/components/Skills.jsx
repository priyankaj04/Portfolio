import { React, useCallback } from 'react';
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../App.css'

function Skills() {
  const particlesInit = useCallback(async engine => {
    //console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  

  return (
    <>
      <Particles className="particles" id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 150,
                duration: 0.5,
              },
            },
          },
          particles: {
            color: {
              value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
            },
            links: {
              color: "#ffffff",
              distance: 200,
              enable: true,
              opacity: 0.2,
              width: 0.5,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 700,
              },
              value: 30,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: ["circle", "square", "triangle", "pentagon", "star"],
            },
            size: {
              value: { min: 2, max: 5 },
            },
          },
          detectRetina: true,
        }} />
      <motion.div className='Skills' animate={{x:0}} initial={{x:2000}}>
        <div className="Card-Container">
          <div className='Card-Container1'>
            <motion.div whileInView={{scale:1}} initial={{scale:0}} transition={{delay:0.1}} className='Card one'>
              <h2>Programming Languages</h2>
              <ul>
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </motion.div>
            <motion.div whileInView={{scale:1}} initial={{scale:0}} transition={{delay:0.1}} className='Card two'>
              <h2>Web Technologies</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node JS</li>
                <li>GraphQL</li>
                <li>GraphCMS</li></ul>
            </motion.div>
            <motion.div whileInView={{scale:1}} initial={{scale:0}} transition={{delay:0.1}} className='Card three'>
              <h2>Libraries</h2>
              <ul>
                <li>React JS</li>
                <li>Redux</li>
                <li>JQuery</li>
                <li>Material UI</li>
              </ul>
            </motion.div>
            <motion.div whileInView={{scale:1}} initial={{scale:0}} transition={{delay:0.4}} className='Card four'>
              <h2>FrameWorks</h2>
              <ul>
                <li>Express JS</li>
                <li>Next JS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>SASS</li>
              </ul>
            </motion.div>
            <motion.div whileInView={{scale:1}} initial={{scale:0}} className='Card five'>
              <h2>Database Management</h2>
              <ul>
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
            </motion.div>
            <motion.div whileInView={{scale:1}} initial={{scale:0}} transition={{delay:0.1}} className='Card six'>
              <h2>Others</h2>
              <ul>
                <li>Linux/Unix</li>
                <li>Git</li>
                <li>Object-Oriented Programming</li>
                <li>DataStructure and Algorithm</li>
              </ul>
            </motion.div></div>
        </div>
      </motion.div>
    </>
  )
}

export default Skills