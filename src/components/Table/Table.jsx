import React, { useState } from 'react';
import  './Table.css';

const data = [
  {
    id: 1,
    name: 'Row 1',
    description: 'This is the first row',
    status: 'Pending',
  },
  {
    id: 2,
    name: 'Row 2',
    description: 'This is the second row',
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Row 3',
    description: 'This is the third row',
    status: 'Pending',
  },
];

const Table = () => {
  const [rows, setRows] = useState(data);

  const handleApprove = (id) => {
    setRows(rows.map(row => {
      if (row.id === id) {
        return { ...row, status: 'Approved' };
      }
      return row;
    }));
  };

  const handleReject = (id) => {
    setRows(rows.map(row => {
      if (row.id === id) {
        return { ...row, status: 'Rejected' };
      }
      return row;
    }));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Approve</th>
          <th>Reject</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.description}</td>
            <td>{row.status}</td>
            <td>
              {row.status === 'Pending' &&
                <button onClick={() => handleApprove(row.id)}>Approve</button>
              }
            </td>
            <td>
              {row.status === 'Pending' &&
                <button onClick={() => handleReject(row.id)}>Reject</button>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
