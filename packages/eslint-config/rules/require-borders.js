module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ensure elements have explicit borders',
      category: 'WHITE DIAMOND',
      recommended: true,
    },
    messages: {
      requireBorders:
        'WHITE DIAMOND: Without a border, an object doesn\'t exist in space.',
    },
    schema: [],
  },
  create(context) {
    const borderNonePattern = /border\s*:\s*(none|0)\b/i;
    const borderWidthZero = /border-width\s*:\s*0\b/i;

    return {
      Property(node) {
        if (
          node.key &&
          node.key.type === 'Identifier' &&
          node.key.name === 'border'
        ) {
          const value = node.value;
          if (value && value.type === 'Literal') {
            const val = String(value.value).toLowerCase();
            if (val === 'none' || val === '0') {
              context.report({
                node,
                messageId: 'requireBorders',
              });
            }
          }
        }
      },
      TemplateLiteral(node) {
        const raw = context.getSourceCode().getText(node);
        if (borderNonePattern.test(raw) || borderWidthZero.test(raw)) {
          context.report({
            node,
            messageId: 'requireBorders',
          });
        }
      },
    };
  },
};
