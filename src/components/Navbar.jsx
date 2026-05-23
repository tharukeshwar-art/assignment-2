function Navbar({ setActiveSection }) {

  return (

    <nav className="navbar">

      <div className="logo">
        GAMERSHUT
      </div>

      <div className="nav-links">

        <button onClick={() => setActiveSection("home")}>
          Home
        </button>

        <button onClick={() => setActiveSection("about")}>
          About
        </button>

        <button onClick={() => setActiveSection("explore")}>
          Explore
        </button>

        <button onClick={() => setActiveSection("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setActiveSection("chat")}>
          Chat
        </button>

        <button onClick={() => setActiveSection("notifications")}>
          Notifications
        </button>

        <button onClick={() => setActiveSection("profile")}>
          Profile
        </button>

        <button onClick={() => setActiveSection("signup")}>
          Login
        </button>

      </div>

    </nav>

  );

}

export default Navbar;