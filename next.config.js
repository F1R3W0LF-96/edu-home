require("dotenv").config();

const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_URL: "https://api.tuitionsearch.co.in",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = nextConfig;
