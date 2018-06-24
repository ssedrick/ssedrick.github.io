const path = require("path");

module.exports = {
	entry: "./src/main.jsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [ /node_modules/ ],
				loader: "babel-loader",
				options: {
					presets: [ "env", "react" ],
					plugins: [["transform-class-properties", { "spec": true }]]
				}
			}
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "shared",
					chunks: "all"
				}
			}
		}
	},
	resolve: {
		modules: [path.resolve(__dirname, "src"), "node_modules"],
		extensions: [".jsx", ".js"]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
	},
	devtool: "source-map",
	target: "web"
};
