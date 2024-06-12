import path from "path"; // path 모듈을 가져옵니다.
import { defineConfig } from "vite"; // Vite의 설정을 정의하는 함수를 가져옵니다.
import react from "@vitejs/plugin-react"; // React 플러그인을 가져옵니다.
import dts from "vite-plugin-dts"; // TypeScript 선언 파일을 생성하는 플러그인을 가져옵니다.
import { viteStaticCopy } from "vite-plugin-static-copy"; // 정적 파일을 복사하는 플러그인을 가져옵니다.

export default defineConfig({
  build: {
    // 라이브러리로 빌드될 것을 지정합니다.
    lib: {
      // 라이브러리 빌드의 진입점을 정의합니다. src/index.tsx 파일을 가리킵니다.
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "jason-kang-storybook-lecture", // 라이브러리 이름을 정의합니다.
      // 다양한 포맷으로 출력될 파일 이름을 생성하는 함수입니다.
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // 외부 라이브러리를 지정합니다. react와 react-dom은 번들에 포함되지 않습니다.
      external: ["react", "react-dom"],
      output: {
        // 외부 라이브러리를 전역 변수로 설정합니다.
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    // 소스 맵을 생성하여 디버깅을 돕습니다.
    sourcemap: true,
    // 빌드 전에 출력 디렉토리를 비웁니다.
    emptyOutDir: true,
  },
  // React 지원을 활성화합니다.
  // dts()는 빌드 중 TypeScript 선언 파일 (*.d.ts)을 생성합니다.
  plugins: [
    react(),
    dts(),
    viteStaticCopy({
      targets: [
        {
          src: "src/index.css", // 복사할 소스 파일을 지정합니다.
          dest: "", // 'dist' 내의 대상 디렉토리를 지정합니다.
        },
      ],
    }),
  ],
});
