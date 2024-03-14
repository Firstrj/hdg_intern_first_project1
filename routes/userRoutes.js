const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontrollers');

// เส้นทางสำหรับสร้างผู้ใช้ใหม่
router.post('/', userController.createUser);
// เส้นทางสำหรับดึงข้อมูลผู้ใช้ทั้งหมด
router.get('/', userController.getAllUsers);

router.put('/:id', userController.updateUser);
// เส้นทางสำหรับลบข้อมูลผู้ใช้
router.delete('/:id', userController.deleteUser);

module.exports = router;
