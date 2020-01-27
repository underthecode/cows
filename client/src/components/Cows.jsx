import React, { useState } from 'react';
import axios from 'axios';

import CowsTable from './CowsTable.jsx';
import AddCowForm from './AddCowForm.jsx';
import EditCowForm from './EditCowForm.jsx';

const Cows = () => {
  const cowsData = [
    {
      id: 1,
      name: 'Buttercup',
      description: 'All kinds are poisonous and generally avoided by livestock'
    },
    {
      id: 2,
      name: 'Daisy',
      description: 'Given rise to many ornamental garden varieties'
    },
    {
      id: 3,
      name: 'Milkshake',
      description: 'A cold drink made of milk'
    },
    {
      id: 4,
      name: 'Bessie',
      description: 'A persons best or closest friend'
    },
    {
      id: 5,
      name: 'MooDonna',
      description: 'Archaic : lady -- used as a form of respectful address'
    },
    {
      id: 6,
      name: 'MooLawn',
      description:
        'Legendary Chinese warrior from the Northern and Southern dynasties'
    }
  ];

  const initFormState = { id: null, name: '', description: '' };

  const [cows, setCows] = useState(cowsData);
  const [currentCow, setCurrentCow] = useState(initFormState);
  const [editing, setEditing] = useState(false);

  const addCow = cow => {
    cow.id = cows.length + 1;
    setCows([...cows, cow]);
  };

  const editRow = cow => {
    setEditing(true);
    setCurrentCow({ id: cow.id, name: cow.name, description: cow.description });
  };

  const updateCow = (id, updatedCow) => {
    setEditing(false);
    setCows(cows.map(cow => (cow.id === id ? updatedCow : cow)));
  };

  const deleteCow = id => {
    setEditing(false);
    setCows(cows.filter(cow => cow.id !== id));
  };

  return (
    <div>
      <h1>CRUD App with Cows</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <div>
              <h2>Edit cow</h2>
              <EditCowForm
                editing={editing}
                setEditing={setEditing}
                currentCow={currentCow}
                updateCow={updateCow}
              />
            </div>
          ) : (
            <div>
              <h2>Add cow</h2>
              <AddCowForm addCow={addCow} />
            </div>
          )}
        </div>
        <div className='flex-large'>
          <h2>View cows</h2>
          <CowsTable cows={cows} editRow={editRow} deleteCow={deleteCow} />
        </div>
      </div>
    </div>
  );
};

export default Cows;
