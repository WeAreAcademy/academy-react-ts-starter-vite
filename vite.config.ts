/// <reference types="vitest" />
/// <reference types="vite/client" />

// See https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
    // currently seems to require you manually reload the app ?
    plugins: [
        // eslint(),
        react(),
        checker({
            typescript: true,
            eslint: { lintCommand: "lint src" },
        }),
    ],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/test/setup.ts",
        // you might want to disable it, if you don't have tests that rely on CSS
        // since parsing CSS is slow
        css: true,
    },
});
