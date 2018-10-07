import React from "react";
import ReactLoading from "react-loading";
import Profile from "../Profile";
import Repositories from "../Repositories";
import { ProfileHomeWrapper, CenterWrapper, ErrorMessage } from "./styles";
import { Query } from "react-apollo";
import get from "lodash/get";
import { getUser } from "../../graphql/queries";
import { FixedContainer } from "../Common";

const ProfileHome = ({ match }) => (
  <Query query={getUser(match.params.username || "nickisaacs")}>
    {({ data, loading, error }) => {
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
          </ProfileHomeWrapper>
        </FixedContainer>
      );
    }}
  </Query>
);

export default ProfileHome;
