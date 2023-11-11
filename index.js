function createConfig(printWidth = 75, ...params) {
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
