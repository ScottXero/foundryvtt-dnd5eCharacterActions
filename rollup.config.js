const typescript = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

module.exports = {
  input: 'src/module/foundryvtt-dnd5eCharacterActions.ts',
  output: {
    dir: 'dist/module',
    format: 'es',
    sourcemap: true,
  },
  plugins: [nodeResolve(), typescript({})],
};
