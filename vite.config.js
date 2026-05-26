import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  server: {
    allowedHosts: [".trycloudflare.com"]
  },
  preview: {
    allowedHosts: [".trycloudflare.com"]
  }
});
