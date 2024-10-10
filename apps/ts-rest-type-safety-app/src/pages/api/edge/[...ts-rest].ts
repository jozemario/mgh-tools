import { createNextHandler } from '@ts-rest/serverless/next';
import { testContract } from '@mgh-tools/contracts';
export const config = {
  runtime: 'edge',
};

export default createNextHandler(
  testContract,
  {
    test: async ({ params, query }:any) => {
      return {
        status: 200,
        body: {
          ...params,
          ...query,
          deleteMe: 'response validation will delete me :(',
        },
      };
    },
  },
  {
    basePath: '/api/edge',
    jsonQuery: true,
    responseValidation: true,
    handlerType: 'pages-router-edge',
  },
);
