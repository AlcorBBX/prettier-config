function createConfig(printWidth = 100, ...params) {
  return {
    printWidth,
    tabWidth: 2,
    bracketSpacing: true,
    bracketSameLine: false,
    singleQuote: true,
    trailingComma: "all",
    arrowParens: "always",
    semi: true,
    quoteProps: "consistent",
    ...params,
  };
}

module.exports = {
  createConfig,
};
