module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ban border-radius > 0',
      category: 'WHITE DIAMOND',
      recommended: true,
    },
    messages: {
      noRoundedCorners:
        'WHITE DIAMOND: Only rectangles are allowed. border-radius violates the architectural geometry.',
    },
    schema: [],
  },
  create(context) {
    const borderRadiusPattern = /border-radius/i;
    const nonZeroPattern = /border-radius\s*:\s*(?!0\b)[^\s;,}]+/i;

    return {
      Property(node) {
        if (
          node.key &&
          node.key.type === 'Identifier' &&
          node.key.name === 'borderRadius'
        ) {
          if (
            node.value &&
            node.value.type === 'Literal' &&
            node.value.value !== '0' &&
            node.value.value !== 0
          ) {
            context.report({
              node,
              messageId: 'noRoundedCorners',
            });
          }
        }
      },
      Declaration(node) {
        if (node.type === 'Rule') {
          for (const decl of node.body || []) {
            if (
              decl.type === 'Property' &&
              decl.key &&
              decl.key.type === 'Identifier' &&
              decl.key.name === 'borderRadius'
            ) {
              if (
                decl.value &&
                decl.value.type === 'Literal' &&
                decl.value.value !== '0' &&
                decl.value.value !== 0
              ) {
                context.report({
                  node: decl,
                  messageId: 'noRoundedCorners',
                });
              }
            }
          }
        }
      },
      JSXAttribute(node) {
        if (
          node.name &&
          node.name.type === 'Identifier' &&
          node.name.name === 'style'
        ) {
          const value = node.value;
          if (value && value.type === 'JSXExpressionContainer') {
            const expr = value.expression;
            if (expr && expr.type === 'ObjectExpression') {
              for (const prop of expr.properties) {
                if (
                  prop.type === 'Property' &&
                  prop.key &&
                  ((prop.key.type === 'Identifier' &&
                    prop.key.name === 'borderRadius') ||
                    (prop.key.type === 'Literal' &&
                      prop.key.value === 'borderRadius'))
                ) {
                  if (
                    prop.value &&
                    prop.value.type === 'Literal' &&
                    prop.value.value !== '0' &&
                    prop.value.value !== 0
                  ) {
                    context.report({
                      node: prop,
                      messageId: 'noRoundedCorners',
                    });
                  }
                }
              }
            }
          }
        }
      },
      TemplateLiteral(node) {
        const raw = context.getSourceCode().getText(node);
        if (nonZeroPattern.test(raw)) {
          context.report({
            node,
            messageId: 'noRoundedCorners',
          });
        }
      },
    };
  },
};
