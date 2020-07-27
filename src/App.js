import React, {Fragment, useState } from 'react';

import './App.css';

import Suma from './componets/Incrementar/Suma'; 
import Restar from './componets/Decremento/Restar'; 
function App() {
  const [count, setCount] = useState(0);
  
 return (
    
    <Fragment >
      <div  className="container" >      
      <p>Reto Tecníco</p>
      <p>Contador a través de clicks <span> {count} </span> </p>
        
      <Suma
        key = {1}
        count = {count}
        setCount = {setCount}
      />
      <br/><br/>
      <Restar
        key = {2}
        count = {count}
        setCount = {setCount}
      />
      </div>
    </Fragment>
  );
}

export default App;
