import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-route-dom';
import './App.css';

// Pages
import MainPage from './Pages/MainPage/MainPage'
import MusicPlayer from './Pages/MusicPlayer/MusicPlayer'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/music_player' component={MusicPlayer} />
        </Switch>
      </Router>
    );
  }

}

export default App;
