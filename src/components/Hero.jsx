import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="container hero-content">

        <div className="hero-left">

          <span className="badge">

            DIGITAL • CLOUD • AI • CONSULTING

          </span>

          <h1>

            Empowering Businesses

            <span> Through Technology</span>

          </h1>

          <p>

            Explore IT Consulting helps organisations
            modernise, innovate and scale through Digital
            Transformation, Cloud, AI, Software Engineering
            and Technology Strategy.

          </p>

          <div className="hero-buttons">

            <button className="primary">

              Book Free Consultation

            </button>

            <button className="secondary">

              Explore Services

            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="glass-card">

            <h3>Technology Consulting</h3>

            <p>Helping businesses transform digitally.</p>

          </div>

          <div className="glass-card">

            <h3>Cloud Solutions</h3>

            <p>AWS • Azure • Google Cloud</p>

          </div>

          <div className="glass-card">

            <h3>Artificial Intelligence</h3>

            <p>AI Strategy & Automation</p>

          </div>

        </div>

      </div>

    </section>
  );
}
