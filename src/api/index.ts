import { ApolloClient, InMemoryCache, NormalizedCacheObject  } from '@apollo/client';

const createClient = (): ApolloClient<NormalizedCacheObject> => new ApolloClient({
    uri: '',
    cache: new InMemoryCache()
});

export default createClient;