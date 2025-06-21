// Импортируем встроенный модуль 'path' для работы с путями к файлам и папкам
const path = require('path');

// Подключаем плагин для автоматической генерации HTML-файла с подключенным скриптом
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Экспортируем объект конфигурации Webpack
module.exports = {
    // 📌 Точка входа в приложение — откуда Webpack начнёт сборку
    entry: './src/index.js',

    // 📌 Параметры выходного файла (bundle)
    output: {
        // Имя файла сборки (можно назвать как угодно)
        filename: 'bundle.js',
        // Путь к папке, куда Webpack положит собранный проект (абсолютный путь)
        path: path.resolve(__dirname, 'dist'),
        // Очистка папки /dist перед каждой сборкой
        clean: true
    },

    // 📌 Устанавливаем режим — 'development' (для разработки) или 'production' (для продакшена)
    mode: 'development',

    // 📌 Настройка обработки файлов (загрузчики)
    module: {
        rules: [
            {
                // Применяем правило к файлам с расширением .js и .jsx
                test: /\.(js|jsx)$/,
                // Исключаем папку node_modules из обработки
                exclude: /node_modules/,
                // Используем babel-loader для обработки JS и JSX файлов
                use: 'babel-loader'
            }
        ]
    },

    // 📌 Позволяет импортировать файлы без указания расширений .js и .jsx
    resolve: {
        extensions: ['.js', '.jsx']
    },

    // 📌 Плагины, которые расширяют возможности Webpack
    plugins: [
        new HtmlWebpackPlugin({
            // HTML-шаблон, в который Webpack автоматически вставит <script src="bundle.js">
            template: './public/index.html'
        })
    ],

    // 📌 Конфигурация встроенного сервера разработки
    devServer: {
        // Папка, из которой будет подаваться собранный проект
        static: './dist',
        // Порт, на котором будет доступен проект (localhost:3000)
        port: 3000,
        // Автоматически открывать браузер при старте сервера
        open: true
    }
};
