import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import url from "rollup-plugin-url";
// If you want to run analytics against the bundle size, import analyze
// as below, and include `analyze()` in the plugins array.
// import analyze from "rollup-plugin-analyzer";

const sharedSettings = {
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    postcss({
      extract: false,
      minimize: true
    }),
    external({
      includeDependencies: true
    }),
    url(),
    json(),
    babel({
      plugins: [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties"
      ],
      exclude: "node_modules/**"
    }),
    commonjs()
  ],
  external: ["lodash"]
};

export default [
  {
    input: "lib/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: false
      },
      {
        file: "dist/index.es.js",
        format: "es",
        sourcemap: false
      }
    ],
    ...sharedSettings
  }
];
