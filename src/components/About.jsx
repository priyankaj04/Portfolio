import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {motion} from 'framer-motion';
import '../App.css';

function About() {
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

    return (<>
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
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
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
                        value: 50,
                    },
                    opacity: {
                        value: 0.8,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }} />
        <motion.div className="About" animate={{scale:1}} initial={{scale:0}} >
            <motion.div className="quote-container" ><motion.div animate={{x:0}} initial={{x:-1000}} transition={{
                delay: 0.1,
                x: { duration: 1 },
                default: { ease: "linear" }}}>
                <p className="quote">“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” </p></motion.div>
            </motion.div>
            <div className="about-container">
                <motion.div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems:'center' }} animate={{x:0}} initial={{x:-1000}} transition={{
                    delay: 1,
                    x: { duration: 1.2 },
                    default: { ease: "ease-in" }}}>
                    <div className='homeContent-Border'>
                        <div className='homeContent-Background'>
                            <div className='about-content' style={{marginBottom: '2px'}}>
                                <p>I'm a Full Stack Web developer located in India. I create simple yet beautiful website.<br /> <br />
                                    I read books and meditate every now and then. I also exercise frequently to keep myself fit.<br /><br />
                                    I'm Goal-Oriented person, curious and always experimenting on new technologies and learn through doing projects. You can connect to me through social links.</p>
                            </div>
                        </div>
                    </div>
                    <a href="./src/Images/Resume.pdf" download style={{ textDecoration: 'none', margin:"0", alignItems:"center" }}>
                        <div className='Resume'><span class="material-symbols-outlined">
                            download
                        </span>
                            <p style={{ textDecoration: 'none' }}>Resume</p></div></a>
                </motion.div>
                <motion.div animate={{y:0}} initial={{y:500}} transition={{
                    delay: 2,
                    y: { duration: 2.2 },
                    default: { ease: "ease-in" }}}>
                <div className="Avatar1"  /></motion.div>
            </div>
        </motion.div>
    </>
    )
}

export default About
