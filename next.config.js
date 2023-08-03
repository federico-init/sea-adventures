/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
    @import ".src/styles/helpers/devices.scss";
    @import ".src/styles/helpers/mixins.scss";
    @import ".src/styles/variables/colors.scss";
    @import ".src/styles/variables/typography.scss";
    `,
  },
};

module.exports = nextConfig;
