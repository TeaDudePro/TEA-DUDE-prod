// index.js
const path = require('path');

// Функция, которая будет добавлять маршруты к приложению
function setupRoutes(app) {
    // Главная страница
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'Qwen.html'));
    });

    /* Страница "О нас"
    app.get('/about', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'about.html'));
    });*/
}

// Экспортируем функцию
module.exports = setupRoutes;