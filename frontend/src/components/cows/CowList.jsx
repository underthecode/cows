import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CowList = () => {
  const [cows, setCows] = useState([]);

  useEffect(() => {
    const getCows = async () => {
      try {
        const response = await axios.get('/api/cows');
        setCows(response.data);
      } catch (error) {
        console.log('err: ', error);
      }
    };
    getCows();
  }, []);

  return (
    <div>
      <h2>
        Cows
        <Link to='/cows/new' className='btn btn-primary float-right'>
          Create Cow
        </Link>
      </h2>
      <hr />
      {cows.map((cow) => {
        return (
          <div key={cow._id}>
            <h4>
              <Link to={`/cows/${cow._id}`}>{cow.name}</Link>
            </h4>
            <small>_id: {cow._id}</small>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default CowList;
