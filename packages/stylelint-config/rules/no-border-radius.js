const stylelint = require('stylelint');

const ruleName = 'white-diamond/no-border-radius';

const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected:
    'WHITE DIAMOND: Only rectangles are allowed. border-radius violates the architectural geometry.',
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
      stylelint.utils.report({
        message: messages.rejected,
        node: decl,
        result,
        ruleName,
      });
    });

    root.walkDecls(/^border-\w+-radius$/, (decl) => {
      stylelint.utils.report({
        message: messages.rejected,
        node: decl,
        result,
        ruleName,
      });
    });
  };
};

rule.ruleName = ruleName;
rule.messages = messages;
module.exports = rule;
