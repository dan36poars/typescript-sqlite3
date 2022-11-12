module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  overrides: [
    {
      files: ['*.ts'],
      excludedFiles: ['.meta/proof.ci.ts', '.meta/exemplar.ts', '*.test.ts'],
      extends: '@exercism/eslint-config-typescript',
    },
    {
      files: ['*.test.ts'],
      excludedFiles: ['custom.test.ts'],
      env: {
        jest: true,
      },
      extends: '@exercism/eslint-config-typescript/maintainers',
    },
    {
      files: ['custom.test.ts'],
      env: {
        jest: true,
      },
      extends: '@exercism/eslint-config-typescript',
    },
    {
      files: ['.meta/proof.ci.ts', '.meta/exemplar.ts', '*.test.ts'],
      excludedFiles: ['custom.test.ts'],
      extends: '@exercism/eslint-config-typescript/maintainers',
    },
  ],
}
