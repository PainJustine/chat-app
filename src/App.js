import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList.js'

function App() {
  return (
    <div className="App">
      <Contact />
    </div>
  );
}
import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Contact
          image="https://randomuser.me/api/portraits/women/29.jpg"
          name="Dana Wood"
          online={true}
        />
        <Contact
          image="https://randomuser.me/api/portraits/men/83.jpg"
          name="Calvin Douglas"
          online={false}
        />
        <Contact
          image="https://randomuser.me/api/portraits/men/57.jpg"
          name="Pedro Fleming"
          online={true}
        />
      </React.StrictMode>
    </div>
  );
}

export default App;

export default App;
