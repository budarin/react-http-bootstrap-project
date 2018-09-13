const packageJson = require('./package');
const browserslist = packageJson.browserslist;

module.exports = {
    extends: ['stylelint-config-recommended', 'stylelint-config-css-modules', 'stylelint-config-prettier'],
    plugins: ['stylelint-order', 'stylelint-no-unsupported-browser-features', 'stylelint-a11y'],
    rules: {
        'plugin/no-unsupported-browser-features': [
            true,
            {
                browsers: browserslist,
                severity: 'warning',
            },
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['value'],
            },
        ],
        'number-leading-zero': 'always',
        indentation: [
            4,
            {
                indentInsideParens: 'once-at-root-twice-in-block',
                severity: 'error',
            },
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'local'],
            },
        ],
        'selector-pseudo-class-case': null,
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes', 'r'],
            },
        ],
        'unit-no-unknown': [
            true,
            {
                ignoreUnits: ['x'],
            },
        ],
        'order/order': [
            ['custom-properties', 'at-variables', 'declarations', 'at-rules', 'rules'],
            {
                severity: 'warning',
            },
        ],
        'order/properties-order': [
            [
                {
                    emptyLineBefore: 'never',
                    properties: ['content'],
                },
                {
                    emptyLineBefore: 'never',
                    properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index'],
                },
                {
                    emptyLineBefore: 'never',
                    properties: [
                        'box-sizing',
                        'display',
                        'flex',
                        'flex-basis',
                        'flex-direction',
                        'flex-flow',
                        'flex-grow',
                        'flex-shrink',
                        'flex-wrap',
                        'align-content',
                        'align-items',
                        'align-self',
                        'justify-content',
                        'order',
                        'margin',
                        'margin-top',
                        'margin-right',
                        'margin-bottom',
                        'margin-left',
                        'padding',
                        'padding-top',
                        'padding-right',
                        'padding-bottom',
                        'padding-left',
                        'min-width',
                        'min-height',
                        'max-width',
                        'max-height',
                        'width',
                        'height',
                        'float',
                        'clear',
                        'clip',
                        'visibility',
                        'overflow',
                        'border',
                        'border-top',
                        'border-right',
                        'border-bottom',
                        'border-left',
                        'border-width',
                        'border-top-width',
                        'border-right-width',
                        'border-bottom-width',
                        'border-left-width',
                        'border-style',
                        'border-top-style',
                        'border-right-style',
                        'border-bottom-style',
                        'border-left-style',
                        'border-radius',
                        'border-top-left-radius',
                        'border-top-right-radius',
                        'border-bottom-right-radius',
                        'border-bottom-left-radius',
                        'border-color',
                        'border-top-color',
                        'border-right-color',
                        'border-bottom-color',
                        'border-left-color',
                        'box-shadow',
                    ],
                },
                {
                    emptyLineBefore: 'never',
                    properties: [
                        'background',
                        'background-attachment',
                        'background-clip',
                        'background-color',
                        'background-image',
                        'background-repeat',
                        'background-position',
                        'background-size',
                    ],
                },
                {
                    emptyLineBefore: 'never',
                    properties: [
                        'color',
                        'font',
                        'font-family',
                        'font-size',
                        'font-smoothing',
                        'font-style',
                        'font-variant',
                        'font-weight',
                        'letter-spacing',
                        'line-height',
                        'list-style',
                        'text-align',
                        'text-decoration',
                        'text-indent',
                        'text-overflow',
                        'text-rendering',
                        'text-shadow',
                        'text-transform',
                        'text-wrap',
                        'vertical-align',
                        'white-space',
                        'word-spacing',
                    ],
                },
            ],
            {
                severity: 'warning',
            },
        ],
    },
};
