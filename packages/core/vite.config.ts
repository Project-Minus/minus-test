import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import copy from "rollup-plugin-copy";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MiLibraryCore",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    emptyOutDir: false,
  },
  plugins: [
    dts({
      outDir: "dist",
      insertTypesEntry: true,
      compilerOptions: {
        baseUrl: "",
        paths: {
          "@minus-check/components": ["@minus-check/components"],
          "@minus-check/styles": ["@minus-check/styles"],
          "@minus-check/types": ["@minus-check/types"],
        },
      },
    }),
    copy({
      targets: [
        // styles 패키지의 CSS 파일을 core의 dist 디렉토리로 복사
        {
          src: "node_modules/@minus-check/styles/dist/*.css",
          dest: "dist",
        },
        {
          src: "./css.d.ts",
          dest: "dist",
        },
      ],
      hook: "writeBundle", // 번들링 후 실행
    }),
  ],
});
