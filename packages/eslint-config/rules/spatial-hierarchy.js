module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce three-layer hierarchy: Physical Boundary → Inner Surface → Content',
      category: 'WHITE DIAMOND',
      recommended: true,
    },
    messages: {
      spatialHierarchy:
        'WHITE DIAMOND: Every object must have Physical Boundary → Inner Surface → Content.',
    },
    schema: [],
  },
  create(context) {
    return {
      JSXElement(node) {
        const elementName = node.openingElement && node.openingElement.name;
        if (!elementName || elementName.type !== 'JSXIdentifier') return;

        const name = elementName.name;
        const hasStyle = (node.openingElement.attributes || []).some(
          (attr) =>
            attr.type === 'JSXAttribute' &&
            attr.name &&
            attr.name.type === 'JSXIdentifier' &&
            attr.name.name === 'style'
        );

        const hasBorder = (node.openingElement.attributes || []).some(
          (attr) =>
            attr.type === 'JSXAttribute' &&
            attr.name &&
            attr.name.type === 'JSXIdentifier' &&
            attr.name.name === 'border'
        );

        const hasPadding = (node.openingElement.attributes || []).some(
          (attr) =>
            attr.type === 'JSXAttribute' &&
            attr.name &&
            attr.name.type === 'JSXIdentifier' &&
            attr.name.name === 'padding'
        );

        if (hasStyle && !hasBorder && !hasPadding) {
          context.report({
            node,
            messageId: 'spatialHierarchy',
          });
        }
      },
    };
  },
};
