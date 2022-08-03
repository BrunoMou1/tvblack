import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl6dyv1hb0x6901un5bib9vlq/master",
  cache: new InMemoryCache(),
});