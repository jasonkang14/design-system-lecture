import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
    viteStaticCopy({
      targets: [
        {
          src: "src/index.css",
          dest: "",
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      fileName: (format) => `index.${format}.js`,
      name: "jason-kang-storybook-lecture",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
