import { useState } from 'react';
import firebase from 'firebase';
import { db, auth } from '../firebase';
import { Input, Button } from '@mui/material';

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    if (msg) {
      await db.collection('messages').add({
        text: msg,
        photoURL,
        uid,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      setMsg('');
      scroll.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <form onSubmit={sendMessage}>
      <div className="sendMsg">
        <Input
          type="text"
          value={msg}
          className="inputSendMsg"
          placeholder="Messag..."
          onChange={({target}) => setMsg(target.value)}
        />
        <Button
          type="submit"
          className="buttonSendMsg"
        >
          Send
        </Button>
      </div>
    </form>
  );
}

export default SendMessage;
