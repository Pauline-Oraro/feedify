import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css';
import UserList from "./userList";

function App() {
  const [data, updateData] = useState([]);
  //performs side effects in function components
  useEffect(() => {
    //request data from the url below
    axios.get("https://randomuser.me/api/?results=50")
    //accessing the resolved data
    .then(response => {
      const data = response.data.results;
      updateData(data);
    })
    //accessing the error information when the promise fails
    .catch(error => {
      console.log(error)
    });
  }, [])
  return(
    <div>
    <h1>FEEDIFY</h1>
    <div>{data.map((item, index) => (
      <UserList key={index} item={item} />
    ))}
    </div>
    </div>
  );
}

export default App;
