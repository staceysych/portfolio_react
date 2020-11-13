import React from 'react';

import MainPage from '../main/main';
import AboutPage from '../about/about';

const App = () => (
  <>
    <section id="main-page">
      <div className="container">
        <MainPage />
      </div>
    </section>
    <section id="about-page">
      <div className="container">
        <AboutPage />
      </div>
    </section>
  </>
);

export default App;
