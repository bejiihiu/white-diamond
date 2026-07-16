module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ban opacity-based transitions and fade animations',
      category: 'WHITE DIAMOND',
      recommended: true,
    },
    messages: {
      noFadeAnimations:
        'WHITE DIAMOND: Objects enter/exit viewport, never fade in/out.',
    },
    schema: [],
  },
  create(context) {
    const opacityTransitionPattern =
      /transition[^;]*opacity|opacity[^;]*transition/i;
    const fadePattern = /fadeIn|fadeOut|fade-in|fade-out/i;

    return {
      Property(node) {
        if (
          node.key &&
          node.key.type === 'Identifier' &&
          node.key.name === 'transition'
        ) {
          const value = node.value;
          if (value && value.type === 'Literal') {
            const val = String(value.value).toLowerCase();
            if (val.includes('opacity')) {
              context.report({
                node,
                messageId: 'noFadeAnimations',
              });
            }
          }
        }
      },
      TemplateLiteral(node) {
        const raw = context.getSourceCode().getText(node);
        if (opacityTransitionPattern.test(raw) || fadePattern.test(raw)) {
          context.report({
            node,
            messageId: 'noFadeAnimations',
          });
        }
      },
    };
  },
};
