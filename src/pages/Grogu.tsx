import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/grogu.jpg';
import Button from '../components/Button';
import Transitions from '../components/Transitions';

const Grogu = () => {
  return (
    <Transitions>
      <div className="container">
        <img src={image} alt="a" />

        <Link to="/mando">
          <Button styles="button-next"> next </Button>
        </Link>
      </div>
    </Transitions>
  );
};

export default Grogu;
