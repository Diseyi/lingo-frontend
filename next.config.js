/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/lingo",
  //       permanent: true,
  //     },
  //   ];
  // },
  nextConfig,
  env: {
    LINGO_IP:
      // eslint-disable-next-line no-undef
      process.env.LINGO_BACKEND_IP || "https://backend-lingo.herokuapp.com",
  },
};
