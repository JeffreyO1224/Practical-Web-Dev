import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const colors = ['#E7ACF1', '#464672', '#13A487', '#1D3210', '#1D5858'];
      const [color, setColor] = useState(0);
  
      const handleClick = () => {
          setColor((color + 1) % 5);
      };
  
      return (
          <div style= {{
            backgroundColor: colors[color],
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}>
              <button className='changer' onClick={handleClick}>
                  Change Color
              </button>
          </div>
      );
}

export default App
