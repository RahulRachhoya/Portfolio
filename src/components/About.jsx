import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="about" className="about section">
            <div className="container">
                <motion.div
                    ref={ref}
                    className="about-card glass-strong"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        About Me
                    </motion.h2>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <p className="about-text">
                            <span className="highlight">Solutions Engineer</span> skilled in{' '}
                            <span className="highlight">REST APIs</span>,{' '}
                            <span className="highlight">integrations</span>,{' '}
                            <span className="highlight">Python</span>,{' '}
                            <span className="highlight">payment workflows</span>, and{' '}
                            <span className="highlight">distributed backend systems</span>.
                        </p>
                        <p className="about-text">
                            I specialize in building robust API integrations, designing payment solutions,
                            and creating scalable backend architectures. With a strong foundation in software
                            testing and automation, I bring a quality-first approach to every project.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
