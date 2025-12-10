import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="newspaper-container">
                <div className="section-header">
                    <h2>About the Engineer</h2>
                </div>
                <div className="about-grid">
                    <div className="about-main">
                        <div className="about-photo-wrapper">
                            <img
                                src="/assets/profile-photo.jpg"
                                alt="Rahul Rachhoya"
                                className="about-photo"
                            />
                        </div>
                        <div className="about-text">
                            <div className="about-summary">
                                <p>
                                    Mr. Rachhoya specializes in building intelligent systems that drive measurable business value. His work bridges the gap between cutting-edge Large Language Models and robust, production-grade software engineering, with a consistent focus on clarity, efficiency, and scalability.
                                </p>
                            </div>
                            <div className="about-role">
                                <div className="box">
                                    <h3>Current Position</h3>
                                    <p className="role-title">Software Engineer – AI & Backend Systems</p>
                                    <p className="role-company">STL Digital Limited</p>
                                    <p className="role-detail">
                                        Leading initiatives in Generative AI and MLOps to optimize production workflows and enhance system reliability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
