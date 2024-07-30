import React from 'react';
import Dropzone from './Dropzone';

const App = () => {
  const handleDrop = (files) => {
    console.log(files)
    // add your logic
  };

  return (
    <div style={containerStyle}>
      <h1>React Drag-and-Drop File Upload</h1>
      <Dropzone onDrop={handleDrop} />
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh'
};

export default App;
