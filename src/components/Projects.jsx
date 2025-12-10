import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section section">
            <div className="newspaper-container">
                {/* Section Header */}
                <div className="section-header">
                    <h2>TECHNICAL INNOVATIONS</h2>
                </div>

                {/* Project 1: AI-Powered Contextual Knowledge Engine */}
                <article className="project-article">
                    <div className="article-header">
                        <div className="kicker">ARTIFICIAL INTELLIGENCE</div>
                        <h1 className="article-headline">
                            AI-POWERED CONTEXTUAL KNOWLEDGE ENGINE ACHIEVES 85% ACCURACY
                        </h1>
                        <div className="headline-underline"></div>
                        <h2 className="article-deck">
                            Revolutionary RAG System Transforms Information Retrieval Using Vector Databases
                        </h2>
                        <div className="article-byline metadata">
                            PUNE — 2024
                        </div>
                    </div>

                    <div className="article-body">
                        <div className="article-columns">
                            <div className="article-column">
                                <p className="drop-cap">
                                    A groundbreaking contextual knowledge engine developed in 2024 demonstrates the power of combining Large Language Models with vector-based embedding storage.
                                </p>
                                <p>
                                    The system, built using Python and LangChain, leverages FAISS and orchestration frameworks to create intelligent knowledge retrieval systems that understand domain-specific context with unprecedented accuracy.
                                </p>
                                <p>
                                    <strong>Key Achievements:</strong>
                                </p>
                                <ul className="achievement-list">
                                    <li>85% query accuracy in domain-specific reasoning</li>
                                    <li>Hierarchical context packs for adaptive content generation</li>
                                    <li>AWS deployment with Docker containerization</li>
                                    <li>Scalable architecture for enterprise use</li>
                                </ul>
                            </div>

                            <div className="article-column">
                                <div className="box">
                                    <h3>Technical Stack</h3>
                                    <ul className="tech-list">
                                        <li>Python</li>
                                        <li>LangChain</li>
                                        <li>FAISS Vector Database</li>
                                        <li>Hugging Face Transformers</li>
                                        <li>AWS Cloud Services</li>
                                        <li>Docker</li>
                                    </ul>
                                </div>

                                <div className="pull-quote">
                                    "The hierarchical context packs enable adaptive content generation that transforms how we interact with domain-specific data."
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="article-footer">
                        <hr className="rule-light" />
                    </div>
                </article>

                {/* Project 2: AI-Augmented Validation System */}
                <article className="project-article">
                    <div className="article-header">
                        <div className="kicker">BACKEND SYSTEMS</div>
                        <h1 className="article-headline">
                            AI-AUGMENTED VALIDATION SYSTEM REDUCES ERRORS BY 60 PERCENT
                        </h1>
                        <div className="headline-underline"></div>
                        <h2 className="article-deck">
                            LLM-Based Reasoning Revolutionizes Backend System Validation
                        </h2>
                        <div className="article-byline metadata">
                            2023-2024
                        </div>
                    </div>

                    <div className="article-body">
                        <div className="article-columns">
                            <div className="article-column">
                                <p className="drop-cap">
                                    An innovative approach to backend validation has achieved remarkable results, cutting validation errors by more than half through intelligent AI integration.
                                </p>
                                <p>
                                    The validation system employs LLM-based reasoning and prompt engineering for API payloads and multi-step workflows, demonstrating how artificial intelligence can enhance traditional software engineering practices.
                                </p>
                                <p>
                                    Implementation on Google Cloud Platform with Kubernetes ensures scalability, while AI Ops practices with CI/CD pipelines guarantee reliability and continuous improvement.
                                </p>
                            </div>

                            <div className="article-column">
                                <div className="box">
                                    <h3>Impact Metrics</h3>
                                    <ul className="tech-list">
                                        <li>60% reduction in validation errors</li>
                                        <li>40% faster debugging cycles</li>
                                        <li>Automated documentation generation</li>
                                        <li>Multi-domain applicability</li>
                                    </ul>
                                </div>

                                <p>
                                    The system's success lies in its ability to understand context and apply reasoning to complex validation scenarios, moving beyond simple rule-based approaches to intelligent decision-making.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="article-footer">
                        <hr className="rule-light" />
                    </div>
                </article>

                {/* Additional Projects Summary */}
                <div className="projects-summary">
                    <h3 className="summary-headline">ADDITIONAL TECHNICAL WORK</h3>
                    <div className="summary-grid">
                        <div className="summary-item">
                            <h4>Intelligent Debugging Assistant</h4>
                            <p className="metadata-small">2023-2024</p>
                            <p>AI-powered tool for analyzing backend states, logs, and failure patterns using LangChain and Python utilities.</p>
                        </div>
                        <div className="summary-item">
                            <h4>RAG Pipeline Optimization</h4>
                            <p className="metadata-small">2023-2024</p>
                            <p>Enhanced system understanding by 40% through advanced retrieval-augmented generation techniques with Pinecone and vector databases.</p>
                        </div>
                        <div className="summary-item">
                            <h4>Model Research & Prototyping</h4>
                            <p className="metadata-small">ONGOING</p>
                            <p>Continuous evaluation of state-of-the-art AI models using PyTorch, TensorFlow, and Hugging Face for real-world applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
