function createConfig(sortImports = true, ...params) {
  return {
    printWidth: 75,
    tabWidth: 2,
    bracketSpacing: true,
    bracketSameLine: false,
    singleQuote: true,
    trailingComma: "all",
    arrowParens: "always",
    semi: true,
    quoteProps: "consistent",
    importOrder: [
      "^(react/(.*)$)|^(react$)",
      "<THIRD_PARTY_MODULES>",
      "^(\\./(.*)$)",
      "^(\\.\\./(.*)$)",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: ["@trivago/prettier-plugin-sort-imports"],
    ...params,
  };
}

module.exports = {
  createConfig,
};
