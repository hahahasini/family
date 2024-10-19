
const ConRender = (props) => {

    // Conditional Rendering

if(props.role == "seller"){
    return ( 
        <div>
            <h1> Welcome Seller!</h1>
        </div>
     );
}
else {
    return ( 
        <div>
            <h1> Welcome Buyer!</h1>
        </div>
     );
}

   
}
 
export default ConRender;