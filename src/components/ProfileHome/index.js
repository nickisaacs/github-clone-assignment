import React from "react";
import ReactLoading from "react-loading";
import Profile from "../Profile";
import Repositories from "../Repositories";
import { ProfileHomeWrapper, CenterWrapper, ErrorMessage } from "./styles";
import { Query } from "react-apollo";
import get from "lodash/get";
import { GET_USER_DATA } from "../../graphql/queries";
import { FixedContainer, Button } from "../Common";

const updateQuery = (previousResult, { fetchMoreResult }) => {
  if (!fetchMoreResult) {
    return previousResult;
  }

  return {
    ...previousResult,
    user: {
      ...previousResult.user,
      repositories: {
        ...previousResult.user.repositories,
        ...fetchMoreResult.user.repositories,
        edges: [
          ...previousResult.user.repositories.edges,
          ...fetchMoreResult.user.repositories.edges
        ]
      }
    }
  };
};

const ProfileHome = ({ match }) => (
  <Query
    query={GET_USER_DATA}
    variables={{ user: match.params.username || "nickisaacs" }}
  >
    {({ data, loading, error, fetchMore }) => {
      const user = get(data, ["user"]);

      if (loading) {
        return (
          <CenterWrapper>
            <ReactLoading type="bubbles" color="#000" />
          </CenterWrapper>
        );
      }

      if (error) {
        if (error.networkError)
          return <ErrorMessage>Network Error</ErrorMessage>;
        if (error.graphQLErrors) {
          let errorMessage = "Something went wrong";
          error.graphQLErrors.forEach(error => {
            if (error.type === "NOT_FOUND") {
              errorMessage = "User not found";
            }
          });
          return <ErrorMessage>{errorMessage}</ErrorMessage>;
        }
      }

      if (!user) {
        return null;
      }

      const repositories = get(user, ["repositories"]);
      const { hasNextPage, endCursor } = get(user, [
        "repositories",
        "pageInfo"
      ]);

      return (
        <FixedContainer>
          <ProfileHomeWrapper>
            <Profile
              image={user.avatarUrl}
              displayName={user.name}
              username={user.login}
              bio={user.bio}
            />
            <Repositories repositories={repositories} username={user.login} />
            {hasNextPage && (
              <Button
                onClick={() =>
                  fetchMore({
                    variables: {
                      cursor: endCursor
                    },
                    updateQuery
                  })
                }
              >
                More
              </Button>
            )}
          </ProfileHomeWrapper>
        </FixedContainer>
      );
    }}
  </Query>
);

export default ProfileHome;
