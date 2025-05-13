import { useState } from 'react';
import ReviewPage from './pages/ReviewPage.jsx'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReviewPage />
    </>
  )
}

export default App;
