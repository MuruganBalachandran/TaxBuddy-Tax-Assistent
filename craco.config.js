module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    allowedHosts: "auto",
  },
  webpack: {
    configure: {
      resolve: {
        fallback: {
          fs: false,
          http: false,
          https: false,
          url: false,
          util: false,
          zlib: false,
          stream: false,
        },
      },
    },
  },
};
