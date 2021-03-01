import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import copy from "rollup-plugin-copy";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

// If you want to run analytics against the bundle size, import analyze
// as below, and include `analyze()` in the plugins array.
// import analyze from "rollup-plugin-analyzer";

export default [
  {
    input: "lib/index.ts",
    output: [
      {
        file: "release/dist/index.js",
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
      commonjs(),
      typescript(),
      copy({
        targets: [
          {
            src: ["./package.json", "./README.md", "./CONTRIBUTING.md", "./CHANGELOG.md"],
            dest: "release"
          }
        ]
      })
    ],
    external: ["lodash"]
  }
];
