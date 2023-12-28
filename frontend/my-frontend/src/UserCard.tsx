// src/UserCard.tsx
import React from 'react';

interface UserCardProps {
  user: {
    id: number;
    username: string;
    age: number;
    email: string;
    phone: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{user.username}</h5>
        <p className="card-text">Age: {user.age}</p>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">Phone: {user.phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
