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
import { Route, Switch, Redirect} from 'react-router-dom';
import React from 'react';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      currentUser: null
    }
  }

  unSubscribeFromAuth = null
  
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef =await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
    
      this.setState({
        currentUser: userAuth
      })
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }


  render(){
    return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Hompage}/>
        <Route path='/hats' component={Hats}/>
        <Route path='/jackets' component={Jackets}/>
        <Route path='/sneakers' component={Sneakers}/>
        <Route path='/women' component={Women}/>
        <Route path='/men' component={Men}/>
        <Route exact path='/login' render={()=> this.state.currentUser ? (<Redirect to='/'/>): (<Login/>)}/>
        <Route exact path='/Sign-up' render={()=> this.state.currentUser ? (<Redirect to='/'/>): (<SignUp/>)} />
      </Switch>
    </div>
  );
  }
}

export default App;
