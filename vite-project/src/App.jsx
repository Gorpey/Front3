import { useState } from 'react'
import './App.css'
import Card from './Components/Card';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1.length < 3 || input1.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    setError('');
    setShowCard(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input1} 
          onChange={(e) => setInput1(e.target.value)} 
          placeholder="Input 1" 
        />
        <input 
          type="text" 
          value={input2} 
          onChange={(e) => setInput2(e.target.value)} 
          placeholder="Input 2" 
        />
        <button type="submit">Submit</button>
      </form>

      {error && <p>{error}</p>}

      {showCard && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default App;