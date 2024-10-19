import axios from "axios";
import { useEffect, useState } from "react";

const FetchCheck = () => {

    let [reqresData,setReqresData] = useState([]);

    // 0. check useEffect
//  1. Connect to reqres.in  ---    axios ( used to connect)
//  2. Get the data -- write the data to state object
//  3. Display the data -- in return

    useEffect(()=>{
        console.log(" Hey!");
        // connect ( install axios, npm i axios)
        let fetchData = async () => {
           let response = await axios.get("https://reqres.in/api/users?page=2");
           console.log(response.data.data);
           //write to state
           setReqresData(response.data.data);
        }
        //get data
        fetchData();     
        
        
    },[]); // empty [] means, get only once - on component load


    return ( 
        <div> 
            <h1> Fetch Check</h1>
            <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">email</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
            {
                reqresData.map((elem) =>{                    
                          return  <tr key={elem.id}>
                            <th scope="row">{elem.id}</th>
                            <td>{elem.email}</td>
                            <td>{elem.first_name}</td>
                            <td>{elem.last_name}</td>
                            <td><img src={elem.avatar} alt="avatar"/></td>
                            </tr>
               })
            }
              </tbody>
                        </table>

        </div>
     )
}
 
export default FetchCheck;