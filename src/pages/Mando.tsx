import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/mando.jpg';
import Button from '../components/Button';
import Transitions from '../components/Transitions';

const Mando = () => {
  return (
    <Transitions>
      <div className="container">
        <img src={image} alt="a" />
        <Button styles="button-next">
          <Link to="/ship"> next</Link>
        </Button>
        <Button styles="button-back">
          <Link to="/grogu"> back</Link>
        </Button>
      </div>
    </Transitions>
  );
};

export default Mando;
