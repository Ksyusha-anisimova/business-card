import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Получаем __dirname в формате ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  // 📌 Точка входа в приложение
  entry: './src/index.tsx',

  // 📦 Выходной файл
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  // 🛠 Режим разработки
  mode: 'development',

  // 🧱 Загрузчики
  module: {
    rules: [
      {
        // Babel для .ts, .tsx, .js, .jsx
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        // CSS-файлы обрабатываются отдельно
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // HTML loader (если используешь шаблон index.html)
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // 🔧 Расширения, которые можно не указывать в import
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  // 🔌 Плагины
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],

  // 🚀 Сервер для разработки
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
    hot: true,
  },
};
