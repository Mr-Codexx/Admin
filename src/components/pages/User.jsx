import React from 'react';
import AdminDashboard from './Role/AdminDashboard';
import SupplierDashboard from './Role/SupplierDashboard';
import UserDashboard from './Role/UserDashboard';
import './User.css';

function User({ user }) {
  const { name, email, role } = user;

  return (
    <div>
        <div>
                {role === 'admin' && <AdminDashboard />}
                {role === 'supplier' && <SupplierDashboard />}
                {role === 'user' && (
                  <UserDashboard name={name} email={email} role={role} />
                )}
              </div>
      <div className="container-fluid">
        
      </div>
    </div>
  );
}

export default User;
