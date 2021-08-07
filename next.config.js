module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && isServer) {
      return {
        ...config,
        entry() {
          return config.entry().then((entry) => {
            return Object.assign({}, entry, {
              generateRss: './scripts/generateRss.js',
            })
          })
        },
      }
    }

    return config
  },
}
