module.exports = {
	jsxRuntime: "automatic",
	typescript: true,
	svgoConfig: {
		plugins: [
			{
				name: "preset-default",
				params: {
					overrides: {
						removeViewBox: false,
					},
				},
			},
		],
	},
};
