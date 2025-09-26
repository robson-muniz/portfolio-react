import {motion} from 'framer-motion';

const Contact = () => {

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

    return <motion.section
        id="contact"
        className='contact'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.6}}
    >
        <motion.h2 variants={fadeInUp} initial='initial' animate='animate' viewport={{once: true}}>
            Get in Touch
        </motion.h2>

        <motion.div className='contact-content' variants={fadeInUp}>
            <motion.form className='contact-form'>
                <motion.input type='text' name='name' placeholder='Your Name...' required whileFocus={{scale: 1.02}}/>
                <motion.input type='email' name='email' placeholder='Your Email...' required whileFocus={{scale: 1.02}}/>
                <motion.textarea name='message' placeholder='Your Message...' required whileFocus={{scale: 1.02}}/>

                <motion.button
                    className='submit-btn'
                    type='submit'
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    Send Message
                </motion.button>
            </motion.form>

        </motion.div>

    </motion.section>
};

export default Contact;