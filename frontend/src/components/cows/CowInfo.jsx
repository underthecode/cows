import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CowInfo = (props) => {
  const [cow, setCow] = useState({});

  useEffect(() => {
    const getCow = async () => {
      try {
        const response = await axios.get(`/api/cows/${props.match.params._id}`);
        setCow(response.data);
      } catch (error) {
        console.log('error', error);
      }
    };
    getCow();
  }, [props]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/cows/${props.match.params._id}`);
      props.history.push('/cows');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>{cow.name}</h2>
      <small>_id: {cow._id}</small>
      <p>{cow.description}</p>
      <div className='btn-group'>
        <Link to={`/cows/${cow._id}/edit`} className='btn btn-primary'>
          Edit
        </Link>
        <button onClick={handleDelete} className='btn btn-danger'>
          Delete
        </button>
        <Link to='/cows' className='btn btn-secondary'>
          Close
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default CowInfo;
