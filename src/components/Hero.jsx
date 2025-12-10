import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="newspaper-container">
                {/* Main Headline */}
                <div className="hero-headline-wrapper">
                    <h1 className="hero-headline">
                        ENGINEER BUILDS INTELLIGENT SYSTEMS<br />
                        WITH LLMS AND GENERATIVE AI
                    </h1>
                    <div className="headline-underline"></div>
                </div>

                {/* Subheadline / Deck */}
                <h2 className="hero-deck">
                    Three Years of Production-Grade AI Solutions Transform Backend Systems Across Industries
                </h2>

                {/* Byline and Dateline */}
                <div className="hero-byline">
                    <span className="byline-text">By Rahul Rachhoya</span>
                    <span className="byline-separator">|</span>
                    <span className="byline-location">Pune, India</span>
                </div>
                <div className="hero-dateline metadata-small">
                    DECEMBER 10, 2024
                </div>

                {/* Three-Column Lead Story */}
                <div className="hero-columns">
                    {/* Column 1 */}
                    <div className="hero-column">
                        <p className="drop-cap">
                            <strong>SPECIALIZING</strong> in Large Language Models and Generative AI systems that drive automation and enhance decision-making across enterprise platforms.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="hero-column">
                        <p>
                            <strong>EXPERTISE IN</strong> building RAG pipelines, prompt engineering, and MLOps practices for scalable AI deployment on cloud platforms including AWS, GCP, and Azure.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="hero-column">
                        <p>
                            Rahul, an AI engineer at STL Digital Limited, has spent over three years developing and deploying production-grade AI solutions that transform how organizations interact with data and automate complex workflows.
                        </p>
                        <p>
                            His work encompasses the full spectrum of modern AI engineering—from researching state-of-the-art models to implementing robust, scalable systems that serve real-world business needs.
                        </p>
                    </div>
                </div>

                {/* Pull Quote */}
                <div className="hero-pullquote pull-quote">
                    "The integration of Large Language Models with traditional backend systems represents a paradigm shift in how we approach software engineering and automation."
                </div>

                {/* Continued Story */}
                <div className="hero-body">
                    <p>
                        The engineer's portfolio demonstrates a consistent focus on practical applications of artificial intelligence. His recent work on contextual knowledge engines achieved 85 percent accuracy in domain-specific query resolution, while his AI-augmented validation systems reduced backend errors by 60 percent.
                    </p>
                    <p>
                        These achievements reflect a deep understanding of both the theoretical foundations of machine learning and the practical requirements of production systems. Rahul's approach combines rigorous research with pragmatic engineering, ensuring that AI solutions are not merely impressive demonstrations but reliable tools that deliver measurable business value.
                    </p>
                    <p>
                        His technical expertise spans the entire AI development lifecycle: from data preparation and model selection through deployment and monitoring. This comprehensive skill set enables him to architect end-to-end solutions that integrate seamlessly with existing infrastructure while pushing the boundaries of what's possible with current AI technologies.
                    </p>
                </div>

                {/* Continued Link */}
                <div className="hero-continue">
                    <a href="#projects" className="continued-link">CONTINUED IN TECHNICAL INNOVATIONS →</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
