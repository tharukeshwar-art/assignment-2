import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Explore from "./components/Explore";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import Auth from "./components/Auth";

function App() {

  const [activeSection, setActiveSection] =
    useState("home");

  const [gamers, setGamers] = useState([
    {
      id:1,
      name:"ShadowX",
      rank:"Ace Rank",
      game:"BGMI",
      image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      online:true
    },

    {
      id:2,
      name:"NightHunter",
      rank:"Conqueror",
      game:"Free Fire",
      image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      online:false
    },

    {
      id:3,
      name:"NovaYT",
      rank:"Immortal",
      game:"Valorant",
      image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
      online:true
    }
  ]);

  const [username, setUsername] = useState("");
  const [game, setGame] = useState("");

  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {

    setNotifications([
      "ShadowX sent you a friend request",
      "NovaYT is online now"
    ]);

  }, []);

  const addGamer = (e) => {

    e.preventDefault();

    if(username.trim() === "" || game.trim() === ""){
      alert("Please fill all fields");
      return;
    }

    const newGamer = {
      id:Date.now(),
      name:username,
      rank:"New Player",
      game:game,
      image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      online:true
    };

    setGamers([...gamers, newGamer]);

    setUsername("");
    setGame("");
  };

  const deleteGamer = (id) => {

    const updatedGamers =
      gamers.filter((gamer) => gamer.id !== id);

    setGamers(updatedGamers);

  };

  return (

    <div>

      <div className="bg-grid"></div>

      <Navbar setActiveSection={setActiveSection} />

      {activeSection === "home" &&
        <Hero setActiveSection={setActiveSection} />
      }

      {activeSection === "about" &&
        <About />
      }

      {activeSection === "explore" &&
        <Explore
          gamers={gamers}
          deleteGamer={deleteGamer}
          username={username}
          setUsername={setUsername}
          game={game}
          setGame={setGame}
          addGamer={addGamer}
        />
      }

      {activeSection === "dashboard" &&
        <Dashboard gamers={gamers} />
      }

      {activeSection === "chat" &&
        <Chat gamers={gamers} />
      }

      {activeSection === "notifications" &&
        <Notifications notifications={notifications} />
      }

      {activeSection === "profile" &&
        <Profile />
      }

      {activeSection === "signup" &&
        <Auth />
      }

    </div>

  );

}

export default App;