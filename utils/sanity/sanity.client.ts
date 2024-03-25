import { createClient, type SanityClient } from 'next-sanity';

import { clientConfig } from './sanity.api';

export function getClient(): SanityClient {
  const client = createClient(clientConfig);
  return client;
}

export const getSanityImageConfig = () => getClient();
