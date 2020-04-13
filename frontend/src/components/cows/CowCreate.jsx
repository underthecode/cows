import React, { useState } from 'react';
import { post } from 'axios';

const CowCreate = (props) => {
  const initialState = { name: '', description: '' };
  const [cow, setCow] = useState(initialState);

  const handleChange = (event) => {
    setCow({ ...cow, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!cow.name || !cow.description) return;
    const postCow = async () => {
      try {
        const response = await post('/api/cows', cow);
        props.history.push(`/cows/${response.data._id}`);
      } catch (error) {
        console.log('error', error);
      }
    };
    postCow();
  };

  const handleCancel = () => {
    props.history.push('/cows');
  };

  return (
    <div>
      <h1>Create Cow</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Name</label>
          <input
            name='name'
            type='text'
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
          <input type='submit' value='Submit' className='btn btn-primary' />
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

export default CowCreate;
