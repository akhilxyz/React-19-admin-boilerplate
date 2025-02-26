import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  formatters: {
    css: true,
    html: true,
    markdown: true,
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-nested-components': 'off',
  },
})
