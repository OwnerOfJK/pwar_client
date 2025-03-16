import path from 'node:path';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import {viteEnvs} from 'vite-envs'
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";
import fs from "fs";

const IN_WORKSPACE = fs.existsSync("pnpm-workspace.yaml")

export default defineConfig({
    logLevel: "info",
    optimizeDeps: {
        // exclude: ['@pixelaw/core-dojo']
        include: ['@pixelaw/core-dojo/DojoSqlPixelStore.webworker']
    },
    plugins: [
        react(),
        wasm(),
        topLevelAwait(),
        viteEnvs({
            declarationFile: ".env.example"
        }),
        {
            name: 'custom-logger',
            configureServer(server) {
                server.middlewares.use('/logs', (req, res, next) => {
                    if (req.method === 'POST') {
                        let body = '';
                        req.on('data', chunk => {
                            body += chunk.toString();
                        });
                        req.on('end', () => {
                            console.log(body); // Handle the log data as needed
                            res.statusCode = 200;
                            res.end();
                        });
                    } else {
                        next();
                    }
                });
            }
        },
    ],
    resolve: {
        alias: IN_WORKSPACE ? {
            "@pixelaw/core": path.resolve(__dirname, '../pixelaw.js/packages/core/src'),
            "@pixelaw/core-dojo": path.resolve(__dirname, "../pixelaw.js/packages/core-dojo/src"),
            "@pixelaw/core-mud": path.resolve(__dirname, "../pixelaw.js/packages/core-mud/src"),
            "@pixelaw/react": path.resolve(__dirname, "../pixelaw.js/packages/react/src"),
            "@pixelaw/react-dojo": path.resolve(__dirname, "../pixelaw.js/packages/react-dojo/src"),
            '@': path.resolve(__dirname, './src'),
        }:{
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        target:"esnext",        // FIXME this seems to fix the mysterious "index.html not found" error in vite build
        sourcemap: true,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
            },
        },
        // minify: 'terser',
        // terserOptions: {
        //     mangle: {
        //         reserved: ['DojoEngine'],
        //     },
        // },

    },

    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
                ws: true
            },
            '/torii': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/torii/, ''),
                // ws: true
            },
            '/rpc': {
                target: 'http://localhost:5050',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/rpc/, ''),
                // ws: true
            }
        },
        allowedHosts: true, //["px.tunnel.devsat.work"],
        strictPort: true,
        fs: {
            allow: [
                path.resolve(__dirname, '../pixelaw.js/packages/core-dojo/src'),
                path.resolve(__dirname, './'),
            ],
        },

    },
});

