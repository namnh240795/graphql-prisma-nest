import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GqlPrismaField = createParamDecorator(
  (_, ctx: ExecutionContext) => {
    const gqlContext = GqlExecutionContext.create(ctx);
    const info = gqlContext.getInfo();
    let fieldMaps = {};
    try {
      const node = info?.fieldNodes[0];
      fieldMaps = traverse(node);
    } catch (error) {}

    return fieldMaps;
  },
);

const traverse = (node, child = undefined) => {
  let root;
  if (!child) {
    root = {};
  } else root = child;

  if (
    !node?.selectionSet?.selections ||
    node?.selectionSet?.selections?.length === 0
  ) {
    return root;
  }

  for (const n of node.selectionSet.selections) {
    if (
      !n?.selectionSet?.selections ||
      n?.selectionSet?.selections?.length === 0
    ) {
      root[n.name.value] = true;
    } else {
      root[n.name.value] = {};
      traverse(n, root[n.name.value]);
    }
  }
  return root;
};
