/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path')
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // disable css-modules component styling
  // webpack(config) {
  //   config.module.rules.forEach((rule) => {
  //     const { oneOf } = rule
  //     if (oneOf) {
  //       oneOf.forEach((one) => {
  //         if (!`${one.issuer?.and}`.includes('_app')) return
  //         one.issuer.and = [path.resolve(__dirname)]
  //       })
  //     }
  //   })
  //   return config
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
