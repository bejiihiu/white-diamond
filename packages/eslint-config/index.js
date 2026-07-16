module.exports = {
  rules: {
    'white-diamond/no-rounded-corners': require('./rules/no-rounded-corners'),
    'white-diamond/require-borders': require('./rules/require-borders'),
    'white-diamond/no-fade-animations': require('./rules/no-fade-animations'),
    'white-diamond/no-bounce': require('./rules/no-bounce'),
    'white-diamond/rectangular-geometry': require('./rules/rectangular-geometry'),
    'white-diamond/spatial-hierarchy': require('./rules/spatial-hierarchy'),
  },
  configs: {
    recommended: {
      plugins: ['white-diamond'],
      rules: {
        'white-diamond/no-rounded-corners': 'warn',
        'white-diamond/require-borders': 'warn',
        'white-diamond/no-fade-animations': 'warn',
        'white-diamond/no-bounce': 'warn',
        'white-diamond/rectangular-geometry': 'warn',
        'white-diamond/spatial-hierarchy': 'warn',
      },
    },
  },
};
