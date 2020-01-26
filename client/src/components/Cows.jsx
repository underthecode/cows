import React, { useState } from 'react';
import axios from 'axios';

import CowsTable from './CowsTable.jsx';

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
        'Aegendary Chinese warrior from the Northern and Southern dynasties'
    }
  ];

  const [cows, setCows] = useState(cowsData);

  return (
    <div>
      <h1>CRUD App with Cows</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add cow</h2>
        </div>
        <div className='flex-large'>
          <h2>View cows</h2>
          <CowsTable cows={cows} />
        </div>
      </div>
    </div>
  );
};

export default Cows;
