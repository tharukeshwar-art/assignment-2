function Dashboard({ gamers }) {

  return (

    <section className="section">

      <div className="section-title">
        Gamer Dashboard
      </div>

      <div className="dashboard-grid">

        <div className="glass-card stat-card">
          <h2>{gamers.length}</h2>
          <p>Total Gamers</p>
        </div>

        <div className="glass-card stat-card">
          <h2>14</h2>
          <p>Online Players</p>
        </div>

        <div className="glass-card stat-card">
          <h2>9</h2>
          <p>Unread Messages</p>
        </div>

      </div>

    </section>

  );

}

export default Dashboard;