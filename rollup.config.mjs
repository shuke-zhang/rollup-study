// rollup.config.mjs
import json from '@rollup/plugin-json'; // 它允许 Rollup 从 JSON 文件中导入数据
import terser from '@rollup/plugin-terser'; // 对此输出进行压缩
export default {
	input: {
        test:'src/test.js',
        main:'src/main.js'
    },
	output: [
        {
            format: 'es', // 输出 esm 模块
            dir: 'packages/core/dist', // 指定目录
            entryFileNames: '[name].esm.js',// 表示输出文件名将是入口文件名加上 .esm.js 后缀。
            sourcemap: true, // 会为每个输出文件生成对应的源映射文件（.map 文件）。
        },
        {
            format: 'cjs', 
            dir: 'packages/core/dist', 
            entryFileNames: '[name].cjs.js',
            sourcemap: true, 
        }
    ],
    plugins: [
        json(), 
        terser(),
    ]
};