import {motion} from "framer-motion";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {vscDarkPlus} from "react-syntax-highlighter/src/styles/prism/index.js";
import {javascript} from "react-syntax-highlighter/src/languages/hljs/index.js";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Hero = () => {
    return <motion.section id="home"
                           className="hero"
                           initial={{opacity: 0}}
                           animate={{opacity: 1}}
                           transition={{duration: 0.8, delay: 0.2}}
    >
        <div className="hero-container">
            <motion.div className="hero-content" variants={staggerContainer} initial='initial' animate='animate'>
                <motion.div className="hero-badge">
                    <span>👋 Hello, I'm </span>
                </motion.div>
                <motion.h1 className="glitch" variants={fadeInUp} whileHover={{scale: 1.02}}>Robson Muniz</motion.h1>
                <motion.h2 className='hero-subtitle' variants={fadeInUp}>Creative Developer & Designer</motion.h2>
                <motion.p className='hero-description' variants={fadeInUp}>Passionate about turning ideas into reality, I craft digital experiences that merge
                    beautiful design with powerful functionality. I specialize in building intuitive, engaging,
                    and modern web applications.
                </motion.p>

                <motion.div
                className="cta-buttons"
                variants={staggerContainer}
                >
                    <motion.a
                        href="#project"
                        className='cta-primary'
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >View My Work</motion.a>
                    <motion.a
                        href="#contacts"
                        className='cta-secondary'
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >Contact Me
                    </motion.a>
                </motion.div>

                <motion.div
                    className='social-links'
                    variants={staggerContainer}
                >
                    <motion.a href='https://github.com/robson-muniz' target="_blank">
                        <i className="fab fa-github"></i>
                    </motion.a>
                    <motion.a href='https://www.linkedin.com/in/robsonmuniz/' target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </motion.a>
                    <motion.a href='https://x.com/WebDevMadeEasy' target="_blank">
                        <i className="fab fa-twitter"></i>
                    </motion.a>
                </motion.div>

            </motion.div>
            <motion.div
                className='hero-image-container'
                initial={{opacity: 0, x:50}}
                animate={{opacity: 1, x:0}}
                transition={{duration: 0.8, delay: 0.4}}
            >
                <div className="code-display">
                    <SyntaxHighlighter
                        language="javascript"
                        style={vscDarkPlus}
                        customStyle={{ margin: 0, padding: '2rem', height: '100%', borderRadius: '20px',
                            background: 'rgba(30,41,59,0.8)', backdropFilter: 'blur(10px)', marginBottom: 50}}

                    >
                        {`
                        const robsonMuniz = {
  name: "Robson Muniz",
  location: "📍 Coimbra, Portugal",
  roles: ["Full Stack Developer", "Content Creator", "Tech Writer"],
  currentFocus: "Building modern web applications with React & Node.js",
  available: true,
  passion: "Turning complex problems into elegant solutions",
  motto: "Code with purpose, create with passion"
};

console.log("Welcome to my digital world! 🚀");
                        `}
                    </SyntaxHighlighter>
                </div>
                <motion.div
                    className='floating-card'
                    animate={{y:[0, -10, 0], rotate:[0,2,0]}}
                    transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
                >
                    <div className='card-content'>
                        <span className='card-icon'>💻</span>
                        <span className='card-text'>Currently working on something awesome!</span>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    </motion.section>

};

export default Hero;