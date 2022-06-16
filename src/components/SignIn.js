import firebase from 'firebase';
import { auth } from '../firebase';
import { Button } from '@mui/material';

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="signIn">
      <Button
        type="submit"
        className="buttonSignIn"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </Button>
    </div>
  );
}

export default SignIn;
