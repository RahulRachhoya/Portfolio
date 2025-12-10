import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education-section section">
            <div className="newspaper-container">
                {/* Section Header */}
                <div className="section-header">
                    <h2>EDUCATIONAL CREDENTIALS</h2>
                </div>

                {/* Education Content */}
                <div className="education-content">
                    <div className="education-item">
                        <h3 className="institution-name">UNIVERSITY OF HYDERABAD</h3>
                        <p className="institution-location metadata">Hyderabad, India</p>

                        <div className="degree-info">
                            <h4 className="degree-title">Master of Computer Applications (MCA)</h4>
                            <p className="degree-details metadata">
                                2019 – 2022 | Grade Point Average: 7.1
                            </p>
                        </div>

                        <div className="areas-of-study">
                            <p>
                                <strong>Areas of Concentration:</strong> Artificial Intelligence, Data Science, Computer Science, Machine Learning
                            </p>
                        </div>
                    </div>
                </div>

                {/* Academic Note */}
                <div className="education-note">
                    <hr className="rule-light" />
                    <p className="metadata-small">
                        Academic foundation in computer science and artificial intelligence, with specialized coursework in machine learning algorithms, data structures, and software engineering principles.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;
