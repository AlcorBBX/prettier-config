# Prettier Config

`.prettierrc.js`:

```js
module.exports = require("@alnero/prettier-config").createConfig();
```

`createConfig` function takes only one optional argument `printWidth`, if your
project needs to change the width of the lines. **100** is a default value.

```js
module.exports = require("@alnero/prettier-config").createConfig(80);
```
