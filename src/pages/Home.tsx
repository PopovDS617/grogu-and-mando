import React from 'react';
import { Link } from 'react-router-dom';
import Transitions from '../components/Transitions';

const Home = () => {
  return (
    <Transitions>
      <div className="container">
        Home
        <Link to="grogu"> start</Link>
      </div>
    </Transitions>
  );
};

export default Home;
