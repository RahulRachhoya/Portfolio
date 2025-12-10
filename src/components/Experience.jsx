import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section section">
            <div className="newspaper-container">
                {/* Section Header */}
                <div className="section-header">
                    <h2>PROFESSIONAL RECORD</h2>
                </div>

                {/* Main Experience */}
                <article className="experience-article">
                    <div className="experience-header">
                        <h3 className="position-title">SOFTWARE ENGINEER – AI & BACKEND SYSTEMS</h3>
                        <div className="company-info metadata">
                            STL Digital Limited, Pune, India
                        </div>
                        <div className="tenure-info metadata-small">
                            June 2022 – Present
                        </div>
                    </div>

                    <div className="experience-intro">
                        <p>
                            <strong>MR. RACHHOYA'S</strong> tenure at STL Digital Limited has been marked by significant contributions to AI-driven solutions and backend system innovations. His work encompasses the full spectrum of modern artificial intelligence engineering, from research and prototyping to production deployment and optimization.
                        </p>
                    </div>

                    {/* Key Contributions Box */}
                    <div className="contributions-box box">
                        <h3>Key Contributions</h3>

                        <div className="contribution-item">
                            <p>
                                <strong>DESIGNED AND IMPLEMENTED</strong> AI-driven solutions integrating Large Language Models and Generative AI for automated validations, documentation generation, and debugging across multiple domains.
                            </p>
                        </div>

                        <div className="contribution-item">
                            <p>
                                <strong>BUILT</strong> retrieval-augmented generation pipelines with vector databases including FAISS and Pinecone, improving system understanding by 40 percent.
                            </p>
                        </div>

                        <div className="contribution-item">
                            <p>
                                <strong>RESEARCHED, PROTOTYPED, AND EVALUATED</strong> state-of-the-art AI models using PyTorch, TensorFlow, and Hugging Face Transformers for real-world applications.
                            </p>
                        </div>

                        <div className="contribution-item">
                            <p>
                                <strong>OPTIMIZED</strong> AI models for accuracy, scalability, and efficiency in production environments using MLOps practices and CI/CD pipelines.
                            </p>
                        </div>

                        <div className="contribution-item">
                            <p>
                                <strong>DEVELOPED</strong> Python-based AI utilities with LangChain for analyzing backend states, logs, and failure patterns.
                            </p>
                        </div>

                        <div className="contribution-item">
                            <p>
                                <strong>COLLABORATED</strong> with cross-functional engineering and product teams to embed AI capabilities into platforms and workflows.
                            </p>
                        </div>
                    </div>

                    <div className="experience-narrative">
                        <p>
                            The engineer's approach combines rigorous academic research with practical engineering discipline. His contributions have consistently delivered measurable business value while advancing the state of AI integration in enterprise systems.
                        </p>
                        <p>
                            His expertise in both traditional backend development and cutting-edge AI technologies positions him uniquely to architect solutions that bridge the gap between conventional software engineering and the emerging AI-first paradigm.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Experience;
