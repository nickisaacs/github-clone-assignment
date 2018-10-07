import gql from "graphql-tag";

export const getUser = user => gql`
{
  user(login: "${user}") {
    login
    name
    avatarUrl
    bio
    repositories(first: 6, orderBy: { direction: ASC, field: NAME }) {
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
