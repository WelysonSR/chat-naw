import React from 'react';
import { auth } from '../firebase';

function SendMessage(props) {
  const { text, uid, photoURL, dataHoraAtual } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div>
      <div className={`message ${messageClass}`}>
        <img src={photoURL} alt="avatar" />
        <p>{text}</p>
        <span className={`dataHora${messageClass}`}>{dataHoraAtual}</span>
      </div>
    </div>
  );
}

export default SendMessage;
