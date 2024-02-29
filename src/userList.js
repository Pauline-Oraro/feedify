import React from "react";

function UserList({item}){
    return (
        <div className="userContainer">
            <div className="cardBody">
            <h3 className="cardHeader">User: {item.login.username}</h3>
            <div className="userInfo">
                <div className="cardImage">
                    <img src={item.picture.medium} alt="user"/>
                </div>
                    <div className="userText">
                    <h4 className="cardTitle">{item.name.title} {item.name.first} {item.name.last}</h4>
                <p className="cardText"> <span className="bold">Email:</span> {item.email}</p>
                <p className="cardText"> <span className="bold">Age: </span>{item.dob.age}</p>
                <p className="cardText"> <span className="bold">Nationality:</span> {item.nat}</p>
                <p className="cardText"> <span className="bold">Phone: </span>{item.phone}</p>
                <p className="cardText"> <span className="bold">Country:</span> {item.location.country}</p>
                <p className="cardText"> <span className="bold">State:</span> {item.location.state}</p>
                <p className="cardText"> <span className="bold">Postcode:</span> {item.location.postcode}</p>
                <p className="cardText"> <span className="bold">Address:</span> {item.location.street.number} {item.location.street.name}</p>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default UserList;