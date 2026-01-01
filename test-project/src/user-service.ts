// A simple user service with room for improvement
// Use this to test /teach command with various tasks

interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

const users: User[] = [];

// Add a new user
function addUser(email: string, name: string) {
  const user = {
    id: Math.random().toString(36).substring(7),
    email: email,
    name: name,
    createdAt: new Date(),
  };
  users.push(user);
  return user;
}

// Find user by email
function findUserByEmail(email: string) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return users[i];
    }
  }
  return null;
}

// Get all users
function getAllUsers() {
  return users;
}

// Delete user
function deleteUser(id: string) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
      return true;
    }
  }
  return false;
}

export { addUser, findUserByEmail, getAllUsers, deleteUser };
