const stylelint = require('stylelint');

const ruleName = 'white-diamond/no-circular-shapes';

const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected:
    'WHITE DIAMOND: Only rectangles exist. Organic shapes violate architectural integrity.',
});

const rule = (primaryOption) => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(
      result,
      ruleName,
      { actual: primaryOption, possible: [true] }
    );

    if (!validOptions) return;

    root.walkDecls('border-radius', (decl) => {
      const value = decl.value.toLowerCase();
      if (value.includes('50%') || value.includes('9999')) {
        stylelint.utils.report({
          message: messages.rejected,
          node: decl,
          result,
          ruleName,
        });
      }
    });

    root.walkDecls('clip-path', (decl) => {
      const value = decl.value.toLowerCase();
      if (value.includes('circle(')) {
        stylelint.utils.report({
          message: messages.rejected,
          node: decl,
          result,
          ruleName,
        });
      }
    });
  };
};

rule.ruleName = ruleName;
rule.messages = messages;
module.exports = rule;
