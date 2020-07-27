import React, {Fragment} from 'react'; 
import '../../App.css';

const Restar = ({count, setCount}) =>{
    const Decremento = () =>{
        let res = count - 1; 
        if(res < 0){
            setCount(count); 
            alert("No puede ser números negativos"); 
            return; 
        }else{
            setCount(res);  
        }
    }
return (
    <Fragment>
        <div>
        <button
         type="button" 
         onClick={ Decremento}
         className="btn-decremento">
        Decremento
        </button>
        </div>
    </Fragment>
); 

}
export default Restar; 