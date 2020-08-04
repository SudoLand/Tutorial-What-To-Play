import React from 'react';
import './App.css';
import { axiosDriver } from "@barktler/driver-axios";
import { SteamAPI } from "@barktler-api/steam";

class App extends React.Component {

  componentDidMount() {

    const steamAPI = SteamAPI.create('<Steam Key>');
    steamAPI.useDriver(axiosDriver);

    steamAPI.getOwnedGames('<Steam ID>').then((details) => {
      console.log(details);
    });
  }

  render() {

    return (<div className="container">
      <header className="title">
        Hello World
      </header>
      <section className="content">
        <p>How are you Indian Mi Fans</p>
        <p>
          Do you like&nbsp;
        <a href="https://www.mi.com/in/mi4i/">Mi4i</a>
        </p>
        <p>How are you Indian Mi Fans</p>
        <p>Do you like Mi Band</p>
      </section>
      <footer className="footer">
        By Myself
      </footer>
    </div>);
  }
}

export default App;
