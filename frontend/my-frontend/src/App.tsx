// src/App.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './UserList';

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1>User List</h1>
      <UserList />
    </div>
  );
};

export default App;
