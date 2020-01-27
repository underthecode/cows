import React, { useState, useEffect } from 'react';

const EditCowForm = props => {
  const [cow, setCow] = useState(props.currentCow);

  useEffect(() => {
    setCow(props.currentCow);
  }, [props]);

  const onChange = e => {
    const { name, value } = e.target;
    setCow({ ...cow, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.updateCow(cow.id, cow);
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

      <button>Update cow</button>
      <button
        onClick={() => props.setEditing(false)}
        className='button muted-button'>
        Cancel
      </button>
    </form>
  );
};

export default EditCowForm;
