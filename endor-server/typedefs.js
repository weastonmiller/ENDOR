// Post field Author's value is the _id of the user

export const typeDefs = `#graphql
  type User {
    _id: String
    sub: String
    email: String
  }

  type Post {
    _id: String
    author: User
    createdAt: String
    updatedAt: String
    image_id: String
    message: String
    tags: [Tag]
  }

  type Tag {
    _id: String
    title: String
  }

  type PostResponse {
    posts: [Post]
  }

  type Query {getPosts}
`;
