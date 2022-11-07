import { React, useCallback } from 'react';
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Project() {

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
              width: 0,
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
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 700,
              },
              value: 10,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: ["circle", "square", "triangle", "pentagon", "star"],
            },
            size: {
              value: { min: 2, max: 4 },
            },
          },
          detectRetina: true,
        }} />
      <motion.div  className="Project">
        <div className="project-Content">
          <motion.div animate={{y:0, scale: 1}} initial={{y: 2000, scale: -1}} transition={{delay: 0.2}} className="ProjectContainer">
          <a href="https://graph-cms-blog-delta.vercel.app/" target="_blank">
            <div className='ProjectImage image1'></div></a>
            <div className="ProjectContent"><h2 style={{marginBottom:0, color:'white'}}> GraphCMS Blog </h2><p style={{margin:0, fontSize:'12px', textAlign:'center'}}>(ReactJS, NextJS, Tailwind CSS, GraphQl, GraphCMS)</p></div>
            <div className='sourceCode' style={{margin: 20, marginLeft:100}}>Source Code:{" "}<a href="https://github.com/priyankaj04/Graph-CMS-Blog" target='_blank'>Click here</a></div>
          </motion.div>
          <motion.div animate={{y:0, scale: 1}} initial={{y: 2000, scale: -1}} transition={{delay: 0.4}} className="ProjectContainer">
          <a href="https://github.com/priyankaj04/Random-API" target="_blank">
            <div className='ProjectImage image2'></div></a>
            <div className="ProjectContent"><h2 style={{marginBottom:0, color:'white'}}> Random API </h2><p style={{margin:0, fontSize:'12px', textAlign:'center'}}>(ReactJS, Material UI, API, Moment)</p></div>
            <div className='sourceCode'style={{margin: 20, marginLeft:100}}>Source Code:{" "}<a href="https://priyankaj04.github.io/Random-API/" target='_blank'>Click here</a></div>
          </motion.div>
          <motion.div animate={{y:0, scale: 1}} initial={{y: 2000, scale: -1}} transition={{delay: 0.6}} className="ProjectContainer">
          <a href="https://github.com/priyankaj04/boat-Xtend" target="_blank">
            <div className='ProjectImage image3'></div></a>
            <div className="ProjectContent"><h2 style={{marginBottom:0, color:'white'}}> Boat-Xtend </h2><p style={{margin:0, fontSize:'12px', textAlign:'center'}}>(ReactJS)</p></div>
            <div className='sourceCode'style={{margin: 20, marginLeft:100}}>Source Code:{" "}<a href="https://priyankaj04.github.io/boat-Xtend/" target='_blank'>Click here</a></div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Project