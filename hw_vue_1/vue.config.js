const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.s(c|a)ss$/,
          use: [
            "vue-style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              // Requires >= sass-loader@^8.0.0
              options: {
                implementation: require("sass"),
                sassOptions: {
                  indentedSyntax: true, // optional
                },
              },
            },
          ],
        },
      ],
    },
  },
};

const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  },
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/imports.styl")],
    });
}