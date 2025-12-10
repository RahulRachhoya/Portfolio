import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-section section">
            <div className="newspaper-container">
                {/* Section Header */}
                <div className="section-header">
                    <h2>TECHNICAL SPECIFICATIONS</h2>
                </div>

                {/* Skills Categories */}
                <div className="skills-content">
                    {/* AI & Machine Learning */}
                    <div className="skill-category">
                        <h3 className="category-title">AI & MACHINE LEARNING</h3>
                        <hr className="category-rule" />
                        <p className="skill-list">
                            Large Language Models (LLMs) • Generative AI • Natural Language Processing • Computer Vision • RAG Pipelines • Prompt Engineering • Fine-tuning • Embeddings • PyTorch • TensorFlow • Hugging Face Transformers • LangChain • LlamaIndex • Scikit-learn
                        </p>
                    </div>

                    {/* Programming & Frameworks */}
                    <div className="skill-category">
                        <h3 className="category-title">PROGRAMMING & FRAMEWORKS</h3>
                        <hr className="category-rule" />
                        <p className="skill-list">
                            Python • Django • Flask • Java • Node.js • TypeScript • REST APIs • Microservices Architecture • GraphQL • FastAPI
                        </p>
                    </div>

                    {/* Cloud & DevOps */}
                    <div className="skill-category">
                        <h3 className="category-title">CLOUD & DEVOPS</h3>
                        <hr className="category-rule" />
                        <p className="skill-list">
                            Amazon Web Services (AWS) • Google Cloud Platform (GCP) • Microsoft Azure • Docker • Kubernetes • Lambda • Elastic Container Service • CI/CD Pipelines • MLOps • AI Ops • Jenkins • GitHub Actions
                        </p>
                    </div>

                    {/* Data Systems */}
                    <div className="skill-category">
                        <h3 className="category-title">DATA SYSTEMS</h3>
                        <hr className="category-rule" />
                        <p className="skill-list">
                            SQL • PostgreSQL • MySQL • Redis • MongoDB • NoSQL • Vector Databases (Pinecone, Qdrant, Weaviate, FAISS) • Elasticsearch
                        </p>
                    </div>

                    {/* Tools & Methodologies */}
                    <div className="skill-category">
                        <h3 className="category-title">TOOLS & METHODOLOGIES</h3>
                        <hr className="category-rule" />
                        <p className="skill-list">
                            Git • Agile Development • Test-Driven Development • System Design • API Design • Performance Optimization • Debugging • Technical Documentation
                        </p>
                    </div>
                </div>

                {/* Expertise Note */}
                <div className="skills-note">
                    <p className="metadata">
                        All listed technologies represent production-level experience gained through professional software development and AI engineering work.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
