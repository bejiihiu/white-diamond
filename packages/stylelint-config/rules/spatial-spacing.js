const stylelint = require('stylelint');

const ruleName = 'white-diamond/spatial-spacing';

const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected:
    'WHITE DIAMOND: All spacing must align to the 4px architectural grid.',
});

const spacingProperties = [
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
  'gap',
  'row-gap',
  'column-gap',
];

const rule = (primaryOption) => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(
      result,
      ruleName,
      { actual: primaryOption, possible: [true] }
    );

    if (!validOptions) return;

    const isValidSpacing = (value) => {
      const num = parseFloat(value);
      if (isNaN(num)) return true;
      return num % 4 === 0;
    };

    root.walkDecls((decl) => {
      if (!spacingProperties.includes(decl.prop)) return;

      const values = decl.value.split(/\s+/);
      for (const value of values) {
        if (value === 'auto' || value === 'inherit' || value === 'initial') {
          continue;
        }
        if (!isValidSpacing(value)) {
          stylelint.utils.report({
            message: messages.rejected,
            node: decl,
            result,
            ruleName,
          });
          break;
        }
      }
    });
  };
};

rule.ruleName = ruleName;
rule.messages = messages;
module.exports = rule;
