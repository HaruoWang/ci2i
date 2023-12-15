const express = require('express');
const router = express.Router();
const Form = require('../models/Form'); // 請確保路徑正確

// 處理 GET 請求
router.get('/', async (req, res) => {
  try {
    // 從 MongoDB 中檢索數據
    const data = await Form.find();

    // 提取 name 的值
    const names = data.map(entry => entry.name);

    // 將檢索到的數據發送給客戶端
    res.json({ success: true, names });
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
