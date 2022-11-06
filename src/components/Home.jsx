import { React, useCallback } from 'react';
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import moment from 'moment';
import '../App.css'

function Home() {
    var time = moment().format('HH')

    function greetings(time) {
        if (time < 12 && time >= 0) {
            return 'Good morning';
        } else if (time >= 12 && time < 16) {
            return 'Good Afternoon';
        } else if (time >= 16 && time < 19) {
            return 'Good Evening';
        } else if (time >= 19 && time <= 23) {
            return 'Good Night';
        }
    }


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
                            value: 25,
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
            <motion.div className='Home'>
                <motion.div className='Home-Content' >
                    <motion.div className="greet">Hi,<div className='greetings'>{greetings(time)}!</div></motion.div>
                    <motion.div className='homeContent-Border '>
                        <div className='homeContent-Background'>
                            <motion.div>
                                <motion.p className='typingFormate' style={{ textAlign: 'center', fontSize: 50, marginBottom: 5 }}>I'm Priyanka</motion.p>
                                <motion.p style={{ fontSize: 26, textAlign: 'center', margin: 2 }}>Full-Stack Web Developer</motion.p>
                            </motion.div>
                            <motion.p style={{ textAlign: 'left', margin: 20, fontSize: 30, fontFamily: 'Roboto Mono', }}>I code because it's fun to build things using computer language.</motion.p>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div className='Avatar' />
            </motion.div>
        </>
    )
}

export default Home