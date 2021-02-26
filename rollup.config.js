import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
// If you want to run analytics against the bundle size, import analyze
// as below, and include `analyze()` in the plugins array.
// import analyze from "rollup-plugin-analyzer";

export default [
  {
    input: "lib/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: false
      }
    ],
    plugins: [
      resolve({
        preferBuiltins: true
      }),
      babel({
        plugins: [
          "@babel/plugin-proposal-object-rest-spread",
          "@babel/plugin-proposal-optional-chaining",
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-proposal-class-properties"
        ],
        exclude: ["node_modules/**", "lib", "bin"]
      }),
      commonjs()
    ],
    external: ["lodash"]
  }
];
