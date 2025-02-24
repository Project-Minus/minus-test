import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MiLibraryCore",
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@minus-check/components",
        "@minus-check/styles",
        "@minus-check/types",
      ],
    },
    emptyOutDir: false,
  },
  plugins: [dts()],
});
