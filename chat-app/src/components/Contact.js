import React from 'react';
import './Contact.css';

let statusIndicator = true;
let statusText = true;


function Contact() {
    return (
        <article className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/18.jpg"/>
            <div>
                <p className="name">Tiffany Mckinney</p>

                <div className="status">
                    <section className={statusIndicator? 'status-online':'status-offline'}></section>
                    <p className="status-text">Online</p>
                </div>

            </div>
        </article>
    );
}

export default Contact;