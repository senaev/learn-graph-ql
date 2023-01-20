import { ApolloClient, InMemoryCache, gql, TypedDocumentNode } from '@apollo/client';
import { Query } from '../graphql-types'

const LIST_QUERY: TypedDocumentNode<Query> = gql`

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