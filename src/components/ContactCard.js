import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.avif";

const ContactCard = (props) => {
  const {id, name,email} = props.data
  return (
    <div className="items">
        <div className="ui avatar image" src= {user} alt = "user"></div>
        <div className="content">
          <Link to={'/contact/${id}'}>
          <div className="header">{name}</div>
          <div>{email}</div>
          </Link>
          <div>
            <i className="trash alternate outine icon" style={{color:"red",marginTop:"7px"}} onClick={() => props.clickHandler(id)}></i>
          </div>
        </div>

      </div>
  );

}

export default ContactCard