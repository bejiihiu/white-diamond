const stylelint = require('stylelint');

const ruleName = 'white-diamond/require-border';

const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected:
    'WHITE DIAMOND: Without a border, an object doesn\'t exist in space.',
});

const interactiveSelectors = [
  'button',
  'input',
  'select',
  'textarea',
  'a[href]',
  '[role="button"]',
  '[role="tab"]',
  '[role="menuitem"]',
  '[tabindex]',
];

const rule = (primaryOption) => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(
      result,
      ruleName,
      { actual: primaryOption, possible: [true] }
    );

    if (!validOptions) return;

    root.walkRules((ruleNode) => {
      const selector = ruleNode.selector;
      const isInteractive = interactiveSelectors.some((sel) =>
        selector.includes(sel)
      );

      if (!isInteractive) return;

      let hasBorder = false;

      ruleNode.walkDecls('border', (decl) => {
        const value = decl.value.toLowerCase();
        if (value !== 'none' && value !== '0' && !value.includes('none')) {
          hasBorder = true;
        }
      });

      ruleNode.walkDecls('border-width', (decl) => {
        const value = decl.value.toLowerCase();
        if (value !== '0' && !value.includes('none')) {
          hasBorder = true;
        }
      });

      if (!hasBorder) {
        stylelint.utils.report({
          message: messages.rejected,
          node: ruleNode,
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
