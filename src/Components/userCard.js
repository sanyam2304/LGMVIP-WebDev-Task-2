import React from "react";
import "./us.css";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elegantthemes.com%2Fblog%2Fwordpress%2Fadd-a-loading-animation-to-your-wordpress-website&psig=AOvVaw3ObGeOcjVVyAJsGaLfvEFf&ust=1637657770209000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjMu9_Mq_QCFQAAAAAdAAAAABAD"
        alt="Loaading.."
        className="loader"
      />
    </div>
  ) : (
    <div id="main">
      {users.map((user) => (
        <div className="project column3">
          {console.log(user)}
          <div className="profile">
            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
            <p className="email">{user.email}</p>
            <p>User ID: {user.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
