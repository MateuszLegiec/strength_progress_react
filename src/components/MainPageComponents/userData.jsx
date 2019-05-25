import React from "react";

const UserData = (props) => {
    return (
        <aside id="userInfo" className="col-md-12 col-lg-3">
            <h4>Username: <span className="userData" id="username">{props.user.username}</span></h4>
            <h4>Email: <span className="userData" id="email">{props.user.email}</span></h4>
            <h4>Date of birth: <span className="userData" id="dateOfBirth">{props.user.date}</span></h4>
            <h4>Body weight: <span className="userData" id="bodyWeight">{props.user.bodyWeight}</span> kg</h4>
            <h4>Theoretical wilks: <span className="userData" id="wilks">{props.user.wilks}</span></h4>
            <h4>Theoretical total: <span className="userData" id="total">{props.user.total}</span> kg</h4>
        </aside>
    )
};

export default UserData;