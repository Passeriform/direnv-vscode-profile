import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: "./src/extension.ts",
      formats: ["cjs"],
    },
    rolldownOptions: {
      external: ["vscode"]
    }
  },
})
