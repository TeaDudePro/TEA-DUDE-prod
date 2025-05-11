const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Отдаём статические файлы из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Qwen.html'));
});

/* Страница "О нас"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
}); 
*/

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});