import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { enableDevPlugins } from "./enableDevPlugins";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "lib/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "esm",
        sourcemap: false
      },
      { file: "dist/lib.cjs.js", format: "cjs" }
    ],
    plugins: [
      ...enableDevPlugins(),
      resolve({
        preferBuiltins: true
      }),
      typescript(),
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
      terser()
    ]
  }
];
