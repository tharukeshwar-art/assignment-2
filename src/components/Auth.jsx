function Auth() {

  return (

    <section className="section auth-section">

      <div className="glass-card auth-box">

        <h2>Login</h2>

        <form>

          <input type="email" placeholder="Email" />

          <input type="password" placeholder="Password" />

          <button className="btn btn-primary">
            Login
          </button>

        </form>

      </div>

      <div className="glass-card auth-box">

        <h2>Sign Up</h2>

        <form>

          <input type="text" placeholder="Username" />

          <input type="email" placeholder="Email" />

          <input type="password" placeholder="Password" />

          <button className="btn btn-primary">
            Create Account
          </button>

        </form>

      </div>

    </section>

  );

}

export default Auth;