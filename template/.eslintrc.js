module.exports = {
  root: true,
  extends: ['react-app', 'airbnb', 'prettier', 'prettier/react'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'object-curly-spacing': ['error', 'always'],
    'spaced-comment': ['error', 'always'],
    semi: ['error', 'always'],
    'comma-style': ['error', 'last'],
  },
};
