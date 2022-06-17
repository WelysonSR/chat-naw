import React from 'react';
import firebase from 'firebase';
import { auth } from '../firebase';
import logoGoogle from '../imgs/logoGoogle.png';

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button
        className="sign-in"
        onClick={signInWithGoogle}
      >
        Sign in with Google
        <img src={logoGoogle} alt="Logo" />
      </button>
    </div>
  );
}

export default SignIn;
