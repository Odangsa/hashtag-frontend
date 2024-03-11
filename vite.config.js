import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        theme_color: "#655D53",
        background_color: "#EEE4D2",
        icons: [
          {
            src: "/public/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/public/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/public/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/public/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
