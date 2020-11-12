import React from 'react';

function Wrapper({ children }) {
  const style = {
    padding: '16px',
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;