module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    devtool: "source-map",
    mode: "development",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};