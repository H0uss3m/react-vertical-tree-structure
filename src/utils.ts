export function numberOfChildren(node, indexChild, type, level) {
  for (let i = 0; node.children && i < node.children.length; i++) {
    node.children[i].indexChild = indexChild;
    node.children[i].level = level;
    indexChild = numberOfChildren(
      node.children[i],
      node.children[i].children ? indexChild : indexChild + 1,
      node.children[i].type,
      type === node.children[i].type ? level : level + 1
    );
  }

  return indexChild;
}
export const calculOffsset = (node) => {
  const { level, indexChild } = node;

  return {
    x: !level ? 20 : level * 450,
    y: !indexChild ? 20 : 130 * indexChild
  };
};
