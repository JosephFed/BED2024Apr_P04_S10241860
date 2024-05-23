const User = require("../models/user");

const createUser = async (req, res) => {
    const newUser = req.body;
    try {
      const createdBook = await User.createUser(newUser);
      res.status(201).json(createUser);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error creating user");
    }
};

const getAllUsers = async (req, res) => {
    try {
      const users = await User.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving users");
    }
};

const getUserById = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
      const user = await User.getUserById(userId);
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving user");
    }
};

const updateUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    const newUserData = req.body;
  
    try {
      const updateUser = await User.updateUser(userId, newUserData);
      if (!updateUser) {
        return res.status(404).send("User not found");
      }
      res.json(updateUser);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error updating user");
    }
};
  
  const deleteUser = async (req, res) => {
    const bookId = parseInt(req.params.id);
  
    try {
      const success = await User.deleteUser(bookId);
      if (!success) {
        return res.status(404).send("User not found");
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting user");
    }
};

async function searchUsers(req, res) {
    const searchTerm = req.query.searchTerm; // Extract search term from query params
  
    try {    
      const users = await User.searchUsers(searchTerm);
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error searching users" });
    }
}

async function getUsersWithBooks(req, res) {
  try {
    const users = await User.getUsersWithBooks();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users with books" });
  }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    searchUsers,
    getUsersWithBooks,
};