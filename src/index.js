import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './Components/Header/Header.jsx';
import Topcontainer from './Components/Topcontainer/Topcontainer.jsx';
import Skillcontainer from './Components/Skillcontainer/Skillcontainer.jsx';
import Projectcontainer from './Components/Projectcontainer/Projectcontainer.jsx';
import Experiencecontainer from './Components/Experiencecontainer/Expcontainer.jsx';
import Contact from './Components/Contactcontainer/Contact.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Topcontainer />
    <Skillcontainer />
    <Projectcontainer />
    <Experiencecontainer />
    <Contact />

  </React.StrictMode>
);


