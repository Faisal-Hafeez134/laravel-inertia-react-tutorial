import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { version } from 'react';
export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,

        }),


    ],


    esbuild: {
        loader: 'jsx', // This tells esbuild to handle JSX syntax in .js files
      },
});
