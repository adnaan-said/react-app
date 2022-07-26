import React from 'react';
import './App.css';
import InputField from './components/InputField';



const App: React.FC = () => {
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
