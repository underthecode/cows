import React, { useState, useEffect } from 'react';
import { get, patch } from 'axios';

const CowUpdate = (props) => {
  const initialState = { name: '', description: '' };
  const [cow, setCow] = useState(initialState);

  useEffect(() => {
    const getCow = async () => {
      try {
        const response = await get(`/api/cows/${props.match.params._id}`);
        setCow(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCow();
  }, [props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateCow = async () => {
      try {
        await patch(`/api/cows/${cow._id}`, cow);
        props.history.push(`/cows/${cow._id}`);
      } catch (error) {
        console.log(error);
      }
    };
    updateCow();
  };

  const handleChange = (event) => {
    setCow({ ...cow, [event.target.name]: event.target.value });
  };

  const handleCancel = () => {
    props.history.push(`/cows/${cow._id}`);
  };

  return (
    <div>
      <h1>Edit {cow.name}</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={cow.name}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label>Description</label>
          <textarea
            name='description'
            rows='5'
            value={cow.description}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='btn-group'>
          <button type='submit' className='btn btn-primary'>
            Update
          </button>
          <button
            type='button'
            onClick={handleCancel}
            className='btn btn-secondary'>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CowUpdate;
