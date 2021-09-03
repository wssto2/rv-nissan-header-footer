import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import cssbundle from 'rollup-plugin-css-bundle';
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import image from '@rollup/plugin-image';
import { uglify } from "rollup-plugin-uglify";

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'NissanHeaderFooter',
        exports: 'named'
    },
    plugins: [
        commonjs(),
        cssbundle(),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        buble({ exclude: 'node_modules/**' }), // Transpile to ES5,
        image(),
        uglify(),
        //nodeResolve({ browser: true, jsnext: true })
    ],
};