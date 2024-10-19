import{useState} from "react";
const StateCheck=()=>{
    let[counter,setCounter]=useState(0);
    let [str,setStr] = useState("*");

    // let num =0 ;
let clickHandler = () => {
    counter++;
    setCounter(counter);  
    console.log("clicked!!!" + counter);
    setStr(str+"");
}

    return ( 
        <>
        <h1> StateCheck!</h1>
        <h5>  The count is {counter} and string is {str} </h5>

        <button onClick={clickHandler}> Click me</button>
        </>
     );
}
 
export default StateCheck;