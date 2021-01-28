module.exports = (config) => {

    let options = {
        port: config.devserver.port ?? 8080,
    }

    return {
        devServer: {
            client: {
                progress: false,
            },
            dev: {
                publicPath: '/dist/',
            },
            firewall: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            host: '0.0.0.0',
            overlay: true,
            port: options.port,
            public: 'http://localhost:8080',
            static: {
                directory: path.resolve(__dirname, '../../src/templates'),
                publicPath: '/',
                watch: {
                    ignored: /node_modules/,
                },
            },
        },
    }
}