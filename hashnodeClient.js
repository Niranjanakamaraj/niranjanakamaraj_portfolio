import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("https://gql.hashnode.com");

const ALL_POSTS_QUERY = gql`
  query getPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            slug
            title
            brief
            coverImage { url }
          }
        }
      }
    }
  }
`;

const defaultImages = {
  "mycodeforgood2025.hashnode.dev": "/jp.jpg",
  "ap-police-hackathon.hashnode.dev": "/ap.jpg",
};

export async function fetchPosts(hostname, first = 5) {
  const data = await client.request(ALL_POSTS_QUERY, { host: hostname, first });
  return data.publication.posts.edges.map(edge => ({
    slug: edge.node.slug,
    title: edge.node.title,
    brief: edge.node.brief,
    coverImage: edge.node.coverImage?.url || defaultImages[hostname] || "/default.jpg",
  }));
}