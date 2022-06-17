import React from 'react';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase.js'
import './App.css';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>RFChat</h1>
        <SignOut />
      </header>
      <section>
        {user ? <Chat /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
