const User = require('../models/userschema');

// Controller สำหรับสร้างผู้ใช้ใหม่
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller สำหรับดึงข้อมูลผู้ใช้ทั้งหมด
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, age } = req.body;
      const updatedUser = await User.findByIdAndUpdate(id, { name, email, age }, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Controller สำหรับลบข้อมูลผู้ใช้
  exports.deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
