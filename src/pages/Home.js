import React from 'react';

const Home = ({ message }) => {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#fdfdfd', minHeight: '90vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📚 Ramy's Library</h1>
      <p style={{ fontSize: '1.25rem', color: '#555' }}>{message}</p>
      <p style={{ marginTop: '2rem', fontSize: '1rem', color: '#888' }}>
        Subscribe for early access starting at just $4/month.
      </p>
    </div>
  );
};

export default Home;