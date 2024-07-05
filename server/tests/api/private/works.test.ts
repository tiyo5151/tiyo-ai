import { expect, test } from 'vitest';
import { createUserClient, noCookieClient } from '../apiClient';
import { GET, POST } from '../utils';

test(GET(noCookieClient.private.works), async () => {
  const userClient = await createUserClient();
  const res = await userClient.private.works.$get();
  expect(res).toHaveLength(0);
});

test(POST(noCookieClient.private.works), async () => {
  const userClient = await createUserClient();
  const novelUrl = 'https://www.aozora.gr.jp/cards/000148/files/773_14560.html';
  const res = await userClient.private.works.$post({
    body: { novelUrl },
  });
  expect(res.novelUrl).toBe(novelUrl);
  expect(res.title).toBe('こころ');
  expect(res.author).toBe('夏目漱石');
});
