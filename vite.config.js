import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración de Vite para el proyecto Pastelería 1000 Sabores.
// El plugin de React habilita la sintaxis JSX y funcionalidades modernas.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  // Configuración de Vitest para los tests unitarios
  test: {
    globals: true,
    environment: 'jsdom',
  },
});