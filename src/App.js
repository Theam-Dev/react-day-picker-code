
import './App.css';
import { useState } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
function App() {
  const [selected, setSelected] = useState(Date);

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
      </header>
    </div>
  );
}

export default App;
