import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Ottimizzazioni per velocizzare la compilazione
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Disabilita source maps in produzione per velocizzare
  productionBrowserSourceMaps: false,
  // Risolve il warning sui lockfiles multipli
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
