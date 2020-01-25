import React from 'react';
import axios from 'axios';

import CowsTable from './CowsTable.jsx';

const Cows = () => {
  return (
    <div>
      <h1>CRUD App with Cows</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add cow</h2>
        </div>
        <div className='flex-large'>
          <h2>View cows</h2>
          <CowsTable />
        </div>
      </div>
    </div>
  );
};

export default Cows;
