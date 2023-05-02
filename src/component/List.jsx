import React from 'react';
import "./List.css"

function List({ value, onClick }) {
  return (
    <tr>
      <td>{value}</td>
      <td>
        <button onClick={onClick}>❌</button>
        <button>📏</button>
        <button>👁</button>
      </td>
    </tr>
  );
}

export default List