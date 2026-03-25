import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} from "next/constants.js"

/** @type {import('next').NextConfig} */
export default function nextConfig(phase) {
  const isProductionPhase =
    phase === PHASE_PRODUCTION_BUILD || phase === PHASE_PRODUCTION_SERVER
  const isDevelopmentServer = phase === PHASE_DEVELOPMENT_SERVER

  return {
    distDir: isDevelopmentServer ? ".next-dev" : ".next",
    output: "export",
    basePath: isProductionPhase ? "/asheri" : "",
    assetPrefix: isProductionPhase ? "/asheri/" : "",
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
    },
  }
}
