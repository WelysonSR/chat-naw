import React from 'react';
import { auth } from '../firebase';

function SendMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL} alt="avatar" />
        <p>{text}</p>
      </div>
    </>
  );
}

export default SendMessage;
