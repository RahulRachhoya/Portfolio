import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [expanded, setExpanded] = useState(false);

    const projectDetails = [
        'Automated end-to-end payment flows (checkout → auth → capture → refund) using Selenium and Pytest',
        'Validated webhook delivery, retry logic, and idempotency for payment events',
        'Built API test suites for Stripe, Razorpay, and PayU integrations',
        'Implemented test data management for multi-currency and multi-gateway scenarios',
        'Integrated tests into CI/CD pipelines (GitLab CI, Jenkins) for continuous validation',
        'Created comprehensive test reports with Allure and custom dashboards',
        'Performed security testing for PCI-DSS compliance and tokenization flows',
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Featured Projects
                </motion.h2>

                <motion.div
                    ref={ref}
                    className="project-card glass-strong"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <div className="project-header">
                        <h3 className="project-title">Payment Flow Validation & E-Commerce Automation</h3>
                        <p className="project-period">2023 – 2024</p>
                    </div>

                    <p className="project-description">
                        Comprehensive test automation framework for payment gateway integrations,
                        covering checkout flows, transaction processing, webhook handling, and compliance validation.
                    </p>

                    <div className="project-tech">
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">Selenium</span>
                        <span className="tech-tag">Pytest</span>
                        <span className="tech-tag">REST APIs</span>
                        <span className="tech-tag">CI/CD</span>
                        <span className="tech-tag">Payment Gateways</span>
                    </div>

                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                className="project-details"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h4 className="details-title">Key Achievements:</h4>
                                <ul className="details-list">
                                    {projectDetails.map((detail, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.4 }}
                                        >
                                            <span className="bullet">▹</span>
                                            {detail}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        className="expand-btn"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? 'Show Less' : 'Show More'}
                        <span className="expand-icon">{expanded ? '▲' : '▼'}</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
