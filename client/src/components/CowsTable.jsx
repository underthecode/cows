import React from 'react';

const CowsTable = () => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name Data</td>
        <td>Description Data</td>
        <td>
          <button className='button muted-button'>Edit</button>
          <button className='button muted-button'>Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
);

export default CowsTable;
