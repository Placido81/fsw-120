import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div>
      <div className="twitterCritter">
        <img src='https://img.icons8.com/fluent/64/000000/twitter.png' alt="logo"/>
        <h1>Twitter</h1>
      </div>
      <div className="homeContainer">
        <div>
          <h1 className="homeWords">It's Happening Now !</h1>
          <h3 className="homeWords">Come Join Us Today At Twitter!</h3>
        </div>
      </div>
  </div>
  );
}

export default Home;