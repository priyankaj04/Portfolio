import { React, useCallback } from 'react';
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App.css'

function Contact() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
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
              value: 50,
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
      <div>
        <div className="Contact">
          <div className="Contact-Content">
          <h2 style={{margin:'10px'}}>Say Hi!</h2>
          <TextField
          required
          color="success"
          id="filled-required"
          variant='filled'
          label="Name"
          style={{width:'300px'}}
        />
        <TextField
          required
          color="success"
          id="filled-required"
          variant='filled'
          label="Email"
          style={{width:'300px'}}
        />
        <TextField
          id="filled-multiline-static"
          label="Message"
          multiline
          color="success"
          variant='filled'
          rows={7}
          style={{width:'300px'}}
        />
          </div>
          <div className='submit'>
          <Button variant="contained" style={{marginLeft: '100px', width:'150px'}}>Submit</Button>
          <a href="./src/Images/PriyankaJ.pdf" download style={{textDecoration:'none'}}>
          <div className='Resume'><span class="material-symbols-outlined">
          download
          </span>
          <p style={{textDecoration: 'none'}}>Resume</p></div></a>
          </div>
        </div>
        <div>
          <div className="social-media">
            <div className='social-media-icons'>
              <a href='https://github.com/priyankaj04' target='_blank'><div className='github' /></a>
              <a href='https://www.linkedin.com/in/priyanka-j-687572213/' target='_blank'><div className='linkedin' /></a>
              <a href='https://www.instagram.com/priyanka_j._/' target='_blank'><div className='instagram' /></a>
            </div>
            <div className="divider" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact