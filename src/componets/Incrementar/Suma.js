import React, {Fragment} from 'react'; 
import '../../App.css';

const Suma = ({count, setCount}) =>{
    const Incrementar = () =>{
        let sum = count + 1;  
        setCount(sum)   
    }
return (
    <Fragment>
        <div>
        <button 
        type="button" 
        onClick={Incrementar} 
        className="btn-incremento">
            Incremento
        </button>
        </div>
    </Fragment>
); 

}
export default Suma; 