function Notifications({ notifications }) {

  return (

    <section className="section">

      <div className="section-title">
        Notifications
      </div>

      <div className="notifications-grid">

        {notifications.map((note, index) => (

          <div
            className="glass-card notification-card"
            key={index}
          >
            {note}
          </div>

        ))}

      </div>

    </section>

  );

}

export default Notifications;