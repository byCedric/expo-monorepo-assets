## 📁 Structure

- [`apps/mobile`](./apps/mobile) - The Expo application consuming asset packages
- [`packages/dynamic-assets`](./packages/dynamic-assets) - Assets wrapped in `get() { require(...) }`
- [`packages/static-assets`](./packages/static-assets) - Assets provided as static binaries
- [`shared/assets`](./shared/assets) - Assets provided as a shared folder

### Shared assets

This folder is not treated as a monorepo workspace, or Node package.
The files are resolved through the [**apps/mobile/tsconfig.json**](./apps/mobile/tsconfig.json).
Because this folder is not considered a Node package, we can omit the **package.json** and just import directly from this folder.

### Static assets

This method is similar to Shared assets, but is treated as a monorepo workspace and Node package.
There are no added benefits of doing this over Shared assets, but it does "fit" inside monorepos.

### Dynamic assets

This method turns the static images back into actual JavaScript code by exporting an asset map.
Each of these properties are `getter` methods to avoid loading all assets at once.
It's similar to shared assets, with the added benefit of TypeScript support.
