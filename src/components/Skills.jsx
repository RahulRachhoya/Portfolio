import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skillCategories = [
        {
            title: 'API & Integrations',
            skills: ['REST APIs', 'Webhooks', 'JSON', 'HTTP', 'OAuth2', 'HMAC', 'Payload Review'],
            icon: '🔌',
        },
        {
            title: 'Payments',
            skills: ['Checkout', 'Auth/Capture/Refund', '3DS/SCA', 'Tokenization', 'Idempotency', 'Reconciliation'],
            icon: '💳',
        },
        {
            title: 'Languages & Tools',
            skills: ['Python', 'Java', 'Node.js/TS', 'Git', 'Postman', 'CloudWatch', 'Log/Trace Debugging'],
            icon: '💻',
        },
        {
            title: 'Cloud/DevOps',
            skills: ['AWS Lambda', 'API Gateway', 'ECS', 'Docker', 'Kubernetes', 'GitLab CI', 'Jenkins'],
            icon: '☁️',
        },
        {
            title: 'Solutioning',
            skills: ['Pre-sales Discovery', 'Integration Architecture', 'POCs', 'Docs', 'Playbooks'],
            icon: '🎯',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Core Skills
                </motion.h2>

                <motion.div
                    ref={ref}
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-card glass"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <div className="skill-icon">{category.icon}</div>
                            <h3 className="skill-title">{category.title}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skillIndex}
                                        className="skill-tag"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.5 + skillIndex * 0.05, duration: 0.3 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
