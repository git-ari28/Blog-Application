import React from 'react';
import Header from './Header';

const Homepage = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("http://localhost:3000/assets/kelly-sikkema-Oz_J_FXKvIs-unsplash.jpg")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    height: '100vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', 
    textAlign: 'center',
  };

  return (
    <div>
      <Header />
      <div style={backgroundImageStyle}>
        <h2>Welcome to InkBlot</h2>
        <p>Your thoughts, your ideas and your views.</p>
      </div>
    </div>
  );
};

export default Homepage;


