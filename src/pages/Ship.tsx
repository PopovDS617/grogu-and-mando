import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/ship.jpg';
import Button from '../components/Button';
import Transitions from '../components/Transitions';

const Ship = () => {
  return (
    <Transitions>
      <div className="container">
        <img src={image} alt="a" />

        <Button styles="button-back">
          <Link to="/mando"> back</Link>
        </Button>
        <Button styles="button-next">
          <Link to="/"> end</Link>
        </Button>
      </div>
    </Transitions>
  );
};

export default Ship;
