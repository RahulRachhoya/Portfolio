import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section section">
            <div className="newspaper-container">
                {/* Section Header */}
                <div className="section-header">
                    <h2>CORRESPONDENCE</h2>
                </div>

                {/* Contact Content */}
                <div className="contact-content">
                    <div className="contact-intro">
                        <p className="metadata">FOR INQUIRIES AND COLLABORATION:</p>
                    </div>

                    <div className="contact-details">
                        <div className="contact-item">
                            <span className="contact-label">Electronic Mail:</span>
                            <a href="mailto:rahulrachhoya0@gmail.com" className="contact-link">
                                rahulrachhoya0@gmail.com
                            </a>
                        </div>

                        <div className="contact-item">
                            <span className="contact-label">Telephone:</span>
                            <a href="tel:+918386067676" className="contact-link">
                                +91-838-606-7676
                            </a>
                        </div>

                        <div className="contact-item">
                            <span className="contact-label">Location:</span>
                            <span className="contact-value">India</span>
                        </div>
                    </div>

                    <div className="contact-availability">
                        <p>
                            Available for consulting, collaboration, and full-time opportunities in AI and machine learning.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <footer className="newspaper-footer">
                    <hr className="rule-double" />
                    <div className="footer-content">
                        <p className="footer-publication metadata-small">
                            Published by Rahul Rachhoya
                        </p>
                        <p className="footer-established metadata-small">
                            Est. 2022
                        </p>
                        <p className="footer-copyright metadata-small">
                            © 2024 The Rachhoya Chronicle. All Rights Reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
