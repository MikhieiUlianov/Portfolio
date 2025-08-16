import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import type { NextConfig } from "next";

const nextConfig = (phase: string): NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "opengraph.githubassets.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
};

export default nextConfig;
