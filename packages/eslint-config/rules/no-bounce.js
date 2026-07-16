module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ban bounce, elastic, spring, and overshoot animations',
      category: 'WHITE DIAMOND',
      recommended: true,
    },
    messages: {
      noBounce:
        'WHITE DIAMOND: Animation serves physics, not decoration.',
    },
    schema: [],
  },
  create(context) {
    const bouncePattern =
      /bounce|elastic|spring|overshoot/i;

    return {
      Property(node) {
        if (
          node.key &&
          node.key.type === 'Identifier' &&
          (node.key.name === 'animation' ||
            node.key.name === 'animationTimingFunction' ||
            node.key.name === 'transitionTimingFunction')
        ) {
          const value = node.value;
          if (value && value.type === 'Literal') {
            const val = String(value.value).toLowerCase();
            if (bouncePattern.test(val)) {
              context.report({
                node,
                messageId: 'noBounce',
              });
            }
          }
        }
      },
      TemplateLiteral(node) {
        const raw = context.getSourceCode().getText(node);
        if (bouncePattern.test(raw)) {
          context.report({
            node,
            messageId: 'noBounce',
          });
        }
      },
    };
  },
};
