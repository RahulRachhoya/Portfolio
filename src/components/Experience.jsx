import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const achievements = [
        'Designed and executed 200+ test cases for payment gateway integrations (Stripe, Razorpay, PayU)',
        'Achieved 93% automation coverage using Selenium, Pytest, and REST Assured',
        'Reduced regression testing time by 70% through CI/CD pipeline integration (GitLab CI, Jenkins)',
        'Built reusable API testing frameworks for checkout, refund, and webhook validation',
        'Collaborated with Solutions Engineers on pre-sales POCs and integration playbooks',
        'Debugged production issues using CloudWatch logs, trace IDs, and payload analysis',
        'Validated OAuth2, HMAC signatures, and 3DS/SCA compliance in payment flows',
    ];

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Professional Experience
                </motion.h2>

                <motion.div
                    ref={ref}
                    className="experience-timeline"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="timeline-line" />

                    <motion.div
                        className="experience-card glass-strong"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <div className="timeline-dot" />

                        <div className="experience-header">
                            <div>
                                <h3 className="company-name">STL Digital Limited</h3>
                                <p className="location">Pune, India</p>
                            </div>
                            <p className="duration">Jun 2022 – Present</p>
                        </div>

                        <h4 className="position">Software Development Engineer in Test (SDET)</h4>

                        <ul className="achievements-list">
                            {achievements.map((achievement, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                >
                                    <span className="bullet">▹</span>
                                    {achievement}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="highlights">
                            <motion.div
                                className="highlight-badge"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 1.2, duration: 0.5 }}
                            >
                                <span className="highlight-number">93%</span>
                                <span className="highlight-label">Automation Coverage</span>
                            </motion.div>
                            <motion.div
                                className="highlight-badge"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 1.4, duration: 0.5 }}
                            >
                                <span className="highlight-number">70%</span>
                                <span className="highlight-label">Time Reduction</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
