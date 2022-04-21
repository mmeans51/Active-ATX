import { gql } from '@apollo/client';
// This file will store all of the GraphQL query requests.

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;