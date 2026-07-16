const stylelint = require('stylelint');

const ruleName = 'white-diamond/no-fade-transition';

const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected:
    'WHITE DIAMOND: Objects enter/exit viewport, never fade in/out.',
});

const rule = (primaryOption) => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(
      result,
      ruleName,
      { actual: primaryOption, possible: [true] }
    );

    if (!validOptions) return;

    root.walkDecls('transition', (decl) => {
      if (decl.value.toLowerCase().includes('opacity')) {
        stylelint.utils.report({
          message: messages.rejected,
          node: decl,
          result,
          ruleName,
        });
      }
    });

    root.walkDecls('transition-property', (decl) => {
      if (decl.value.toLowerCase().includes('opacity')) {
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
