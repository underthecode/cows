import React, { useState, useReducer } from 'react';

const AddCowForm = props => {
  const initFormState = { id: null, name: '', description: '' };
  const [cow, setCow] = useState(initFormState);

  const onChange = e => {
    const { name, value } = e.target;
    setCow({ ...cow, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!cow.name || !cow.description) return;
    props.addCow(cow);
    setCow(initFormState);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input type='text' name='name' value={cow.name} onChange={onChange} />
      <label>Description</label>
      <input
        type='text'
        name='description'
        value={cow.description}
        onChange={onChange}
      />
      <button>Add new cow</button>
    </form>
  );
};

export default AddCowForm;
