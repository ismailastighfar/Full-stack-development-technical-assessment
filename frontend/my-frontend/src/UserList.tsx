// src/UserList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Assuming each page has 6 users
        const response = await axios.get(`http://localhost:3000/users`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [currentPage]);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;

  // Display only the users for the current page
  const displayedUsers = users.slice(startIndex, endIndex);

  return (
    <div>
      <div className="d-flex flex-wrap">
        {displayedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="mt-3">
        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentPage((prevPage) => Math.max(1, prevPage - 1))}
        >
          Previous Page
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default UserList;
