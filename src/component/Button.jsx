import React from 'react'

function Button({style,value,onClick}) {
  return (
    <button onClick={onClick} style={style}>
      {value}
    </button>
  );
}

export default Button