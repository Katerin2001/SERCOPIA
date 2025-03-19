import withMDX from "@next/mdx";

const nextConfig = withMDX({
  extension: /\.mdx?$/,
})({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            providerImportSource: "@mdx-js/react",
          },
        },
      ],
    });

    return config;
  },
});

export default nextConfig;
