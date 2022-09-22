import './App.css';
import Header from './components/Header/Header';
import Hompage from './pages/Homepage/Hompage';
import Hats from './pages/Hats/Hats';
import Jackets from './pages/Jackets/Jackets';
import Men from './pages/Men/Men';
import Women from './pages/women/Women';
import Sneakers from './pages/Sneakers/Sneakers';
import Login from './pages/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/Home' component={Hompage}/>
        <Route path='/hats' component={Hats}/>
        <Route path='/jackets' component={Jackets}/>
        <Route path='/sneakers' component={Sneakers}/>
        <Route path='/women' component={Women}/>
        <Route path='/men' component={Men}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/Sign-up' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
