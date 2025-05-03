import React from 'react';

const Profile = () => {
  const user = { name: 'Demo User', email: 'demo@example.com', subscription: 'Premium' };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Your Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Subscription:</strong> {user.subscription}</p>
      <button
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={() => alert('Logout functionality coming soon')}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;