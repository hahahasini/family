import Greetings from "./Greetings";
import House from "./House";

const ConRenderOne = (props) => {

    // Conditional Rendering

    return ( 
        (props.role == "buyer") ? 
        <div>
            <h1> Welcome Buyer!</h1>
        </div>
         : 
        <div>
        <h1> Welcome Seller!</h1>
    </div>
     );

    // return (
    //     (props.role == "buyer") ? 
    //     <Greetings/>
    //     :
    //     <House/>
    // )

       
}
 
export default ConRenderOne;