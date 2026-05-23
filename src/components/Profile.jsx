function Profile() {

  return (

    <section className="section">

      <div className="section-title">
        Edit Profile
      </div>

      <div className="glass-card profile-form">

        <form>

          <input type="text" placeholder="Username" />

          <input type="text" placeholder="Game ID" />

          <input type="text" placeholder="Rank" />

          <textarea placeholder="Bio"></textarea>

          <button className="btn btn-primary">
            Save Profile
          </button>

        </form>

      </div>

    </section>

  );

}

export default Profile;