require("dotenv").config();

const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_URL: "https://8fe7-101-0-41-108.ngrok-free.app",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = nextConfig;
