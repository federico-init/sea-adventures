/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
    @import "@/styles/helpers/devices.scss";
    @import "@/styles/helpers/mixins.scss";
    @import "@/styles/variables/colors.scss";
    @import "@/styles/variables/typography.scss";
    `,
  },
};

module.exports = nextConfig;
