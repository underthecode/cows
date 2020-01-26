import React from 'react';

const CowsTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.cows.length > 0 ? (
        props.cows.map(cow => (
          <tr key={cow.id}>
            <td>{cow.name}</td>
            <td>{cow.description}</td>
            <td>
              <button className='button muted-button'>Edit</button>
              <button className='button muted-button'>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No cows</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default CowsTable;
