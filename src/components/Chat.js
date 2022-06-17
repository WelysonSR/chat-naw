import firebase from 'firebase';
import React, { useState, useRef } from 'react';
import { db, auth } from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SendMessage from './SendMessage';

function Chat() {
  const dummy = useRef();
  const messagesRef = db.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    const hoje = new Date()
    const dia = hoje.getDate().toString().padStart(2, '0')
    const mes = String(hoje.getMonth() + 1).padStart(2, '0')
    const ano = hoje.getFullYear()
    const dataHoraAtual = `${dia}/${mes}/${ano}  ${hoje.getHours()}:${hoje.getMinutes()}`

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      dataHoraAtual,
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <SendMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type your message..." />

      <button type="submit" disabled={!formValue}>Send</button>

    </form>
  </>)
}

export default Chat;
