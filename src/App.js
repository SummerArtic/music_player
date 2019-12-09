import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Pages
import MainPage from './Pages/MainPage/MainPage'
import MusicPlayer from './Pages/MusicPlayer/MusicPlayer'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch className='App'>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/music_player' component={MusicPlayer} />
        </Switch>
      </Router>
    );
  }

}

export default App;
