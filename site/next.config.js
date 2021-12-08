module.exports = {
  publicExcludes: ['!noprecache/**/*', '!img/**/*'],
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: process.env.NODE_ENV === 'production',
    skipWaiting: true,
  },
};
