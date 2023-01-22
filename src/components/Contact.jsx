import React, { useCallback, useState, useRef } from 'react';
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import '../App.css'

function Contact() {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tr4280p', 'template_h1u3a07', form.current, 'JR35GHpW2jnOQg_4A')
      .then((result) => {
        //console.log(result.text);
        setOpen(true);
        setSuccess(true);
      }, (error) => {
        //console.log(error.text);
        setOpen(true);
        setSuccess(false);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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
      <div><form ref={form} onSubmit={sendEmail}>
        <motion.div className="Contact" animate={{scale:1}} initial={{scale: 2}}>
          <div className="Contact-Content">
          <motion.div animate={{y:0}} initial={{y:1000}} transition={{delay:0.1}}>
            <h2 style={{ marginBottom: '0px', fontSize: 30, fontWeight: 700 }} >Get in Touch!</h2></motion.div>
            <motion.div animate={{x:0}} initial={{x:1000}} transition={{delay:0.05}}>
            <TextField
              required
              color="success"
              id="filled-required"
              variant='filled'
              label="Name"
              style={{ width: '300px' }}
              name="user_name"
              
            /></motion.div>
            <motion.div animate={{x:0}} initial={{x:1000}} transition={{delay:0.1}}>
            <TextField
              required
              color="success"
              id="filled-required"
              variant='filled'
              label="Email"
              style={{ width: '300px' }}
              name="user_email"
            /></motion.div>
            <motion.div animate={{x:0}} initial={{x:1000}} transition={{delay:0.15}}>
            <TextField
              id="filled-multiline-static"
              label="Message"
              multiline
              color="success"
              variant='filled'
              rows={7}
              style={{ width: '300px' }}
              name="message"
            /></motion.div>
            </div>
            <motion.div animate={{x:0}} initial={{x:-1000}} transition={{delay:0.1}} style={{width: '250px', display: 'flex', justifyContent: 'center', height: '100px', alignItems: 'center'}}>
            <button type="submit" className="submit" value="send" variant="contained" style={{ width: '150px', cursor:"pointer", height: "50px", fontSize:18 }}><p>Submit</p></button></motion.div>
          <Snackbar open={open && success} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Message sent!
            </Alert>
          </Snackbar>
          <Snackbar open={open && !success} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              Message was not able to send, Try after sometime!
            </Alert>
          </Snackbar>
        </motion.div>
      </form>
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