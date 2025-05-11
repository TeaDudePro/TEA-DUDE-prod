// server.js
const express = require('express');
const path = require('path');

// Импортируем нашу функцию маршрутов
const setupRoutes = require('./index');

const app = express();
const PORT = 3000;

// Отдаём статические файлы из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем маршруты
setupRoutes(app);

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});