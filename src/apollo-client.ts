import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const LIST_QUERY = gql`
query Query {
  list {
    id
  }
}
`;

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

client
  .query({
    query: LIST_QUERY,
  })
  .then((result) => console.log(result));

export const apolloClient = client;