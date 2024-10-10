import { initClient } from '@ts-rest/core';
import { DataComponent } from './data-component';
import { testContract } from '@mgh-tools/contracts';

const edgeApi = initClient(testContract, {
  baseUrl: 'http://localhost:4200/api/edge',
  baseHeaders: {},
  throwOnUnknownStatus: true,
});

export default async function Test() {
  try {
    const response = await edgeApi.test({
      params: { id: 1 },
      query: { foo: 'test', bar: 123 },
    });

    return (
      <main>
        <DataComponent data={response.body} />
      </main>
    );
  } catch {
    return <div>Error</div>;
  }
}
