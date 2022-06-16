import { auth } from '../firebase';
import { Button } from '@mui/material';

function SignOut() {
  return (
    <div className="signOut">
      <Button
        type="submit"
        className="buttonSignOut"
        onClick={() => auth.signOut()}
      >
        Sign out
      </Button>
    </div>
  );
}

export default SignOut;
