module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ban circular, oval, and elliptical shapes',
      category: 'WHITE DIAMOND',
      recommended: true,
    },
    messages: {
      rectangularGeometry:
        'WHITE DIAMOND: Only rectangles exist. Organic shapes violate architectural integrity.',
    },
    schema: [],
  },
  create(context) {
    const circularPattern =
      /circle\(|ellipse\(|oval\(|border-radius\s*:\s*50%/i;

    return {
      Property(node) {
        if (
          node.key &&
          node.key.type === 'Identifier' &&
          node.key.name === 'borderRadius'
        ) {
          const value = node.value;
          if (value && value.type === 'Literal') {
            const val = String(value.value).toLowerCase();
            if (val === '50%' || val === '9999px' || val === '9999') {
              context.report({
                node,
                messageId: 'rectangularGeometry',
              });
            }
          }
        }
      },
      TemplateLiteral(node) {
        const raw = context.getSourceCode().getText(node);
        if (circularPattern.test(raw)) {
          context.report({
            node,
            messageId: 'rectangularGeometry',
          });
        }
      },
    };
  },
};
