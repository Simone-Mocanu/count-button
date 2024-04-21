import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center justify-center m-4">
        <div className="grid grid-cols-1">
        <div className="flex justify-center">
          <Button variant="contained" onClick={() => {setCount(count + 1)}}>
            <span className="font-bold">Press me!</span>
          </Button>
        </div>
        <div className="mt-5 flex justify-center">
          <Typography variant="h4">{ count }</Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
