module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    allowedHosts: "auto",
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws'
    }
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
