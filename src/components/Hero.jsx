import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero section">
            <div className="hero-container container" ref={ref}>
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div className="hero-greeting" variants={itemVariants}>
                        Hi, I'm
                    </motion.div>

                    <motion.h1 className="hero-name" variants={itemVariants}>
                        RAHUL RACHHOYA
                    </motion.h1>

                    <motion.h2 className="hero-tagline" variants={itemVariants}>
                        <span className="gradient-text">Solutions Engineer</span> |{' '}
                        <span className="gradient-text">API Integration Specialist</span> |{' '}
                        <span className="gradient-text">Payment Systems Expert</span>
                    </motion.h2>

                    <motion.div className="hero-contact-info" variants={itemVariants}>
                        <span>📍 India</span>
                        <span>•</span>
                        <span>📞 +91-838-606-7676</span>
                        <span>•</span>
                        <span>✉️ rahulrachhoya0@gmail.com</span>
                    </motion.div>

                    <motion.div className="hero-cta" variants={itemVariants}>
                        <button className="btn btn-primary" onClick={scrollToContact}>
                            Get In Touch
                        </button>
                        <a
                            href="#projects"
                            className="btn btn-outline"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            View My Work
                        </a>
                    </motion.div>
                </motion.div>

                {/* Floating Geometric Shapes */}
                <div className="floating-shapes">
                    <motion.div
                        className="shape shape-1"
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.div
                        className="shape shape-2"
                        animate={{
                            y: [0, 40, 0],
                            rotate: [0, -180, -360],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.div
                        className="shape shape-3"
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 20, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.div
                        className="shape shape-4"
                        animate={{
                            y: [0, 30, 0],
                            x: [0, -15, 0],
                            rotate: [0, 90, 180],
                        }}
                        transition={{
                            duration: 9,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
