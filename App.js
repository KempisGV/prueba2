import React from 'react';
import UserStore from './Store/UserStore';
import LoginForm from './LoginForm';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import './App.css';

class App extends React.Component {
  
  async doLogout(){
    try {
      let res = await fetch ('/logout', {
        method: 'post',
        headers: {
          'Accept ' : 'application/json',
          'Content-Type': 'application/json'
        }
      });
      Let result = await res.json();
      if (result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }
      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }
    catch (e){
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }  
  render() {
    return (
      <div className="app">
        asada
      </div>
    );
  }
}



export default App;
