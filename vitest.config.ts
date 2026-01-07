// informa para o typescript que o defineConfig vai ter estas propriedades (plugins, test, resolve, etc)
/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setupTests.ts'],
        include: ['src/**/*.spec.tsx', 'src/**/*.spec.ts', 'src/**/*.test.ts'],
    },
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, "./src") }], // define que o alias '@' se refere ao caminho absoluto da pasta src
    }
})