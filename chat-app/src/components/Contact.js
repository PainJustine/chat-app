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
    );
}
        

export default Contact;