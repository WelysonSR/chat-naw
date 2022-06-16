import { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase';
import SendMessage from './SendMessage';
import SignOut from './SignIn';

function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'send' : 'receved'}`}>
            <img src={photoURL} alt="user" />
            <p>{text}</p>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
