import React, {Component} from 'react';
import './App.css';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Accordion from './components/Accordion';
import SignUp from './components/SignUp';
import {Route, Switch, withRouter} from 'react-router-dom'

<<<<<<< HEAD
class App extends Component {
  state={
    user: null,
    isLogged: false
  };

  signUp = async(data) => {
    try {
      const signUpResponse = await fetch('http://localhost:3030/user/signUp', {
        method: 'POST',
        credential: 'include',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await signUpResponse.json();
      console.log(parsedResponse, 'this is data from sign up function')
    } catch (error) {
      console.log(error);
    };
  };

  render(){
    return (
      <div>
        <Navbar/>
        <main>
          <Switch>
            <Route exact path="/signUp" render={(props) => <SignUp {...props} signUp={this.signUp}/>}/>
          </Switch>
        </main>
        <Search/>
      </div>
    );
  };
=======
function App() {
  return (
    <div className="container">
      <Navbar/>
      <Search/>
      <SignUp/>
      <Accordion/>
    </div>
  );
>>>>>>> ea8ac5216c5c9e7bb2f3ff6100595e4afe996d6e
}

export default withRouter(App);
