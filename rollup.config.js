import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import copy from "rollup-plugin-copy";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { enableDevPlugins } from "./enableDevPlugins";

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
      ...enableDevPlugins(),
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
