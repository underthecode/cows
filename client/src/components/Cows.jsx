import React from 'react';
import axios from 'axios';

class Cows extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Cows</h1>
        <div className='flex-row'>
          <div className='flex-large'>
            <h2>Add cow</h2>
          </div>
          <div className='flex-large'>
            <h2>View cows</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Cows;
