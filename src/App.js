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
import { setCurrentUser } from './redux/user/user.reducer';
import { connect } from 'react-redux';




class App extends React.Component{
  unSubscribeFromAuth = null
  
  componentDidMount(){
    const {setCurrentUser} = this.props

    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        
        const userRef =await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        })
      }
    
      setCurrentUser( userAuth)
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }


  render(){
    return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Hompage}/>
        <Route path='/hats' component={Hats}/>
        <Route path='/jackets' component={Jackets}/>
        <Route path='/sneakers' component={Sneakers}/>
        <Route path='/women' component={Women}/>
        <Route path='/men' component={Men}/>
        <Route exact path='/login' render={()=> this.props.currentUser ? (<Redirect to='/'/>): (<Login/>)}/>
        <Route exact path='/Sign-up' render={()=> this.props.currentUser ? (<Redirect to='/'/>): (<SignUp/>)} />
      </Switch>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
