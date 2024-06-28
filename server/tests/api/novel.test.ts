import { expect, test } from 'vitest';
import { noCookieClient } from './apiClient';
import { GET, POST } from './utils';

test(GET(noCookieClient.novel), async () => {
  const res = await noCookieClient.novel.$get();
  expect(res).toEqual('Hello');
});

test(POST(noCookieClient.novel), async () => {
  const aozoraUrl = 'https://www.aozora.gr.jp/cards/000148/files/773_14560.html';
  const res = await noCookieClient.novel.$post({ body: { aozoraUrl } });
  expect(typeof res).toEqual('string');
});
