import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { useState} from 'react';

const App = () => {
  const [entries, setEntries] = useState(messages);

  const handleLike = (id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, liked: !entry.liked } : entry
      )
    );
  };

  const totalLikes = entries.reduce((acc, entry) => acc + Number(entry.liked), 0);
  
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section className='widget'>
        <p>{totalLikes} ❤️s</p>
        </section>
      </header>
      <main>
        <ChatLog entries = {entries} onHandleLike={handleLike} />
      </main>
    </div>
  );
};

export default App;
