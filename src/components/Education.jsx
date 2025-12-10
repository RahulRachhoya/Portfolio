import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const Education = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="education" className="education section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Education
                </motion.h2>

                <motion.div
                    ref={ref}
                    className="education-card glass-strong"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <div className="education-icon">🎓</div>

                    <h3 className="university-name">University of Hyderabad</h3>

                    <div className="degree-info">
                        <p className="degree">Master of Computer Application (MCA)</p>
                        <p className="duration">2019 – 2022</p>
                    </div>

                    <div className="gpa">
                        <span className="gpa-label">GPA:</span>
                        <span className="gpa-value">7.1</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
