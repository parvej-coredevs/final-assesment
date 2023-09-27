import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const result = axios.get('http://localhost:8000/commit', { "Authorization": "Bearer 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" })
    setResult(result);
  }, []);

  return (
    <>
      <div>
        <ul>
          {result.map(item => (
            <li className={`${item.commit.endsWith(/^[0-9]/) ? 'hightlight' : ''}`}>{item.commit}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
