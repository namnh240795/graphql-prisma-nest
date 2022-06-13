import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GqlPrismaField = createParamDecorator(
  (_, ctx: ExecutionContext) => {
    const gqlContext = GqlExecutionContext.create(ctx);
    const info = gqlContext.getInfo();
    const fieldMaps = {};
    try {
      const node = info?.fieldNodes[0];
      if (node) {
        traverse(node, fieldMaps);
      }
    } catch (error) {}

    return fieldMaps;
  },
);

const traverse = (node, root) => {
  if (!node) {
    return root;
  }
  node?.selectionSet?.selections?.forEach((e) => {
    root[e.name.value] = true;
    if (e?.selectionSet?.selections) {
      traverse(e, root[e.name.value]);
    }
  });
};
