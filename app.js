// app.js
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://haruo:wang@test.6n0ikyf.mongodb.net/test');

const Form = require('./models/Form'); // 請確保路徑正確
const result = require('./routes/result');

app.use(express.static('public'));
app.use(express.json());
app.use('/result', result);

/// 處理 POST 請求
app.post('/process-form', async (req, res) => {
    try {
        // 獲取表單數據
        const { name, email } = req.body;

        // 創建一個新的文檔
        const formEntry = new Form({ name, email });

        // 將文檔保存到數據庫
        await formEntry.save();

        res.json({ message: `Hello, ${name}! Your form is submitted and saved to MongoDB.` });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 啟動服務器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
