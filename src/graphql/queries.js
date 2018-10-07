import gql from "graphql-tag";

export const GET_USER_DATA = gql`
  query($cursor: String, $user: String!) {
    user(login: $user) {
      login
      name
      avatarUrl
      bio
      repositories(
        after: $cursor
        first: 6
        orderBy: { direction: ASC, field: NAME }
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            name
            url
            description
            primaryLanguage {
              name
            }
            owner {
              login
              url
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

export const getRepoContents = (user, repo) => gql`
  {
    user(login: "${user}") {
      repository(name: "${repo}") {
        id
        description
        descriptionHTML
        stargazers {
          totalCount
        }
        viewerHasStarred
        viewerSubscription
        watchers {
          totalCount
        }
        object(expression: "master:") {
          ... on Tree {
            entries {
              name
              type
              oid
            }
          }
        }
      }
    }
  }
`;
