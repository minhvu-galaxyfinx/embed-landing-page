// const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    // experimental: {
    //     esmExternals: false,
    // },
    /**
     *
     * @param {import('webpack').Configuration} config
     * @returns {import('webpack').Configuration}
     */
    // webpack(config, { isServer }) {
    //     config.plugins.push(
    //         new NextFederationPlugin({
    //             name: 'customhome',
    //             filename: 'static/chunks/remoteEntry.js',
    //             remotes: {},
    //             exposes: {
    //                 './CustomHome': './pages/index.js',
    //             },
    //             shared: {
    //             },
    //             extraOptions: {
    //                 exposePages: true
    //             },
    //         })
    //     );

    //     return config;
    // },
}

module.exports = nextConfig