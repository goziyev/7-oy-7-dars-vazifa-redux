import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths"; // Plagin qo'shildi
import svgrPlugin from "vite-plugin-svgr";


export default defineConfig({
  define: {

    global: {},
  },
  resolve: {
    alias: {
      process: "process/browser",
      buffer: "buffer",
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      assert: "assert",
      http: "stream-http",
      https: "https-browserify",
      os: "os-browserify",
      url: "url",
      util: "util",
    },
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
