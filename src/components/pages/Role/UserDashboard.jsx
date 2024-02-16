// UserDashboard.js
import React from 'react';

function UserDashboard({ name, email, role }) {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
      {/* Common data for all roles */}
    </div>
  );
}

export default UserDashboard;