// server.ts
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/users');

   
    if (response.data && Array.isArray(response.data.users)) {
     
      const users = response.data.users;

      // if any search query parameters are provided
      const { id, username, age, email, phone } = req.query;
      let filteredUsers = [...users];

      // Search Options
      if (id) {
        filteredUsers = filteredUsers.filter((user: any) => user.id === parseInt(id.toString(), 10));
      }
      if (username) {
        filteredUsers = filteredUsers.filter(
          (user: any) => user.username.toLowerCase().includes(username.toString().toLowerCase())
        );
      }
      if (age) {
        filteredUsers = filteredUsers.filter((user: any) => user.age === parseInt(age.toString(), 10));
      }
      if (email) {
        filteredUsers = filteredUsers.filter((user: any) =>
          user.email.toLowerCase().includes(email.toString().toLowerCase())
        );
      }
      if (phone) {
        filteredUsers = filteredUsers.filter((user: any) =>
          user.phone.includes(phone.toString())
        );
      }

      const result = filteredUsers.map((user: any) => ({
        id: user.id,
        username: user.username,
        age: user.age,
        email: user.email,
        phone: user.phone,
      }));

      res.json(result);
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
export { app };