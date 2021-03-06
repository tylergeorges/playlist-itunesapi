import './App.css';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import PlaylistSongs from './pages/PlaylistSongs';

function App() {

  return (
    <div className="App">
      <Switch>
      <Route  path="/:name/home" component={Home} />
      <Route  path="/:name/playlist/:playlist" component={PlaylistSongs} />
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
      <Route  exact path="/" component={Welcome} />
      </Switch>

    </div>
  );
}

/*
  each user has a different array of their playlists unique to them
*/



export default App;
