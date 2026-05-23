function Explore({
  gamers,
  deleteGamer,
  username,
  setUsername,
  game,
  setGame,
  addGamer
}) {

  return (

    <section className="section">

      <div className="section-title">
        Explore Gamers
      </div>

      <form
        className="glass-card add-form"
        onSubmit={addGamer}
      >

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Game Name"
          value={game}
          onChange={(e) =>
            setGame(e.target.value)
          }
        />

        <button className="btn btn-primary">
          Add Gamer
        </button>

      </form>

      <div className="gamer-grid">

        {gamers.map((gamer) => (

          <div
            className="glass-card gamer-card"
            key={gamer.id}
          >

            <div
              className={
                gamer.online
                ? "status online"
                : "status offline"
              }
            ></div>

            <img src={gamer.image} alt="" />

            <h3>{gamer.name}</h3>

            <div className="badge">
              {gamer.rank}
            </div>

            <p>{gamer.game}</p>

            <button
              className="btn btn-secondary"
              onClick={() => deleteGamer(gamer.id)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Explore;