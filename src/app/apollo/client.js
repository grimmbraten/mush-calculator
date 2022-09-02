import { ApolloClient, InMemoryCache } from '@apollo/client';

const generateApolloLink = () => undefined; //'https://my-graphql-api.io/simple/v1/endpoint'

export const client = new ApolloClient({
  link: generateApolloLink(),
  cache: new InMemoryCache()
});
