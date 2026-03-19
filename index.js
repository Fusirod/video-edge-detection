const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Phục vụ tất cả các file tĩnh (html, mp4) trong thư mục hiện tại
app.use(express.static(__dirname));

// Đường dẫn mặc định trỏ về index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`🚀 Server đang chạy thử nghiệm tại: http://localhost:${port}`);
    console.log(`Vui lòng mở trình duyệt và truy cập link trên.`);
});