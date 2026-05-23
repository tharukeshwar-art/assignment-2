function Chat({ gamers }) {

  return (

    <section className="section">

      <div className="section-title">
        Live Chat
      </div>

      <div className="chat-layout glass-card">

        <div className="chat-sidebar">

          {gamers.map((gamer) => (

            <div
              className="chat-user"
              key={gamer.id}
            >

              <img src={gamer.image} alt="" />

              <div>
                <h4>{gamer.name}</h4>
                <small>{gamer.game}</small>
              </div>

            </div>

          ))}

        </div>

        <div className="chat-window">

          <div className="messages">

            <div className="message received">
              Ready for match?
            </div>

            <div className="message sent">
              Yes bro
            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Chat;