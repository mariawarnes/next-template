import { createClient } from 'next-sanity';
import type { FetchDataParams } from '@/types';
import { clientConfig } from '../sanity/sanity.api';
// Server-side Sanity data retrieval example:
// const data = await fetchCMSDataServer<Type>(query);
//
// Client-side Sanity data retrieval example:
//
export async function fetchCMSDataServer<T>(
  query: string,
): Promise<T | undefined> {
  const client = createClient(clientConfig);
  try {
    const data: T = await client.fetch(query);
    debouncedSetCMSStatus(true);
    return data as T; // Return an empty object of type T if no data is fetched
  } catch (error) {
    console.error('Failed to fetch data:', error);
    debouncedSetCMSStatus(false);
    redirectToLogin503CMS();
  }
}
export async function fetchCMSDataClient<T>({
  query,
  setDataFunction,
  shouldFetch = true,
}: FetchDataParams<T>): Promise<void> {
  if (!shouldFetch) {
    return; // Skip fetching if shouldFetch is false
  }
  try {
    const client = createClient(clientConfig);
    const data: T | null = (await client.fetch<T>(query)) || null;
    if (data) {
      setDataFunction(data);
      debouncedSetCMSStatus(true);
    } else {
      debouncedSetCMSStatus(false);
      redirectToLogin503CMS();
    }
  } catch (error) {
    debouncedSetCMSStatus(false);
    redirectToLogin503CMS();
    throw error;
  }
}
