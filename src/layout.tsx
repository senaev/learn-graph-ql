import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";

const Layout = ({
  client,
}: {
  client: ApolloClient<NormalizedCacheObject>;
}) => <ApolloProvider client={client}>Hello, world!!!</ApolloProvider>;

export function renderLayout(client: ApolloClient<NormalizedCacheObject>) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Layout client={client} />);
}
