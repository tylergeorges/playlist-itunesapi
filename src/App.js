import './App.css';
import Search from './pages/search';
import Playlists from './pages/playlist';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';

function App() {

  return (
    <div className="App">
      <Sidebar />

      <Switch>
          <Route path="/playlists" component={Playlists}/>
          
          <Route path="/" component={Search}/>
      </Switch>

    </div>
  );
}

export default App;
