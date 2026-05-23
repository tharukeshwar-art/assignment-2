function Hero({ setActiveSection }) {

  return (

    <section className="hero">

      <div className="hero-content">

        <h1>
          Find Your Perfect
          <span> Gaming Squad</span>
        </h1>

        <p>
          Connect with gamers who play the same games.
        </p>

        <div className="hero-buttons">

          <button
            className="btn btn-primary"
            onClick={() => setActiveSection("signup")}
          >
            Get Started
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => setActiveSection("explore")}
          >
            Explore Gamers
          </button>

        </div>

      </div>

    </section>

  );

}

export default Hero;