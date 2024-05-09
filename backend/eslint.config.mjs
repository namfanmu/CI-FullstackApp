import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [{
        globals: {
            browser: true,
            require: true,
            describe: true,
            it: true,
        },
        env: {
            node: true,
        },
        parserOptions: {
            ecmaVersion: 2022,
        },
    },
    pluginJs.configs.recommended,
    pluginReactConfig,
];