import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [{
        languageOptions: {
            globals: {
                browser: true,
                require: true,
                describe: true,
                it: true,
            },
        },
        parserOptions: {
            ecmaVersion: 2022,
        },
    },
    pluginJs.configs.recommended,
    pluginReactConfig,
];