import React from 'react';
import './Contact.css';

let statusIndicator = true;
let statusText = true;


function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/18.jpg"/>
            <div>
                <h4 className="name">Tiffany Mckinney</h4>
                <div className="status">
                    <span className={statusIndicator? 'status-online':'status-offline'}></span>
                    <span className="status-text">{statusText? 'Online':'Offline'} </span>
                </div>

            </div>
        </div>
    );import Proptypes from "prop-types";
    import React from "react";
    import "./Contact.css";
    
    function Contact(props) {
      return (
        <div className="Contact">
          <img className="avatar" src={props.image} alt={props.imageDescription} />
          <div>
            <p className="name">{props.name}</p>
            <div className="status">
              <div className={props.online ? "status-online" : "status-offline"} />
              <p className="status-text">{props.online ? "Online" : "Offline"}</p>
            </div>
          </div>
        </div>
      );
    }
    
    Contact.propTypes = {
      image: Proptypes.string.isRequired,
      name: Proptypes.string.isRequired,
      online: Proptypes.bool.isRequired
    };
    
    export default Contact;
    
}
        

export default Contact;