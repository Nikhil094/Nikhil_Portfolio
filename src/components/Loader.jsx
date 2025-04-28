import React from 'react';

function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff',
      }}
    >
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
