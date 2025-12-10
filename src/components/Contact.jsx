import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const contactInfo = [
        {
            icon: '📧',
            label: 'Email',
            value: 'rahulrachhoya0@gmail.com',
            link: 'mailto:rahulrachhoya0@gmail.com',
        },
        {
            icon: '📞',
            label: 'Phone',
            value: '+91-838-606-7676',
            link: 'tel:+918386067676',
        },
        {
            icon: '📍',
            label: 'Location',
            value: 'India',
            link: null,
        },
    ];

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Get In Touch
                </motion.h2>

                <motion.div
                    ref={ref}
                    className="contact-content"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <p className="contact-intro">
                        I'm currently open to new opportunities in Solutions Engineering,
                        API Integration, and Payment Systems. Let's connect!
                    </p>

                    <div className="contact-cards">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                className="contact-card glass"
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                            >
                                <div className="contact-icon">{info.icon}</div>
                                <h3 className="contact-label">{info.label}</h3>
                                {info.link ? (
                                    <a href={info.link} className="contact-value">
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="contact-value">{info.value}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="social-links"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <p className="social-text">Connect with me on social media</p>
                        <div className="social-icons">
                            <motion.a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                💼
                            </motion.a>
                            <motion.a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                💻
                            </motion.a>
                            <motion.a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                🐦
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <footer className="footer">
                <p>© 2024 Rahul Rachhoya. Built with React & Framer Motion.</p>
            </footer>
        </section>
    );
};

export default Contact;
