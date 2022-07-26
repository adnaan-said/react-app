import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';



const App: React.FC = () => {

  //const [search, setSearch] = useState<string | number>("");
  
  return(
  <div className="App">
  <span className='heading'>Greatest Store</span>  
  <span className='sideItem1'>Contact Us  </span>
  <span className='sideItem2'>View Deliveries</span>
  <InputField/>
  
  </div>
  );
}

export default App;
