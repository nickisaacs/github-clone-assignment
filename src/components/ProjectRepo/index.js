import React from "react";
import ReactLoading from "react-loading";
import Starrable from "./Starrable";
import Watchable from "./Watchable";
import { GoRepo } from "react-icons/go";
import { CenterWrapper, ErrorMessage } from "../ProfileHome/styles";
import {
  FileListWrapper,
  Files,
  RepoHeader,
  BreadCrumbs,
  RepoActions,
  Container,
  RepoDescription
} from "./styles";
import RepoItem from "./RepoItem";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import get from "lodash/get";
import { getRepoContents } from "../../graphql/queries";

const ProjectRepo = ({ match }) => (
  <Query query={getRepoContents(match.params.user, match.params.repo)}>
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
          return <ErrorMessage>{error.graphQLErrors}</ErrorMessage>;
        }
      }

      if (!user) {
        return null;
      }

      const files = get(user, ["repository", "object", "entries"]);
      const repoDetails = get(user, ["repository"]);

      const {
        descriptionHTML,
        id,
        viewerHasStarred,
        viewerSubscription
      } = repoDetails;
      const stars = get(repoDetails, ["stargazers", "totalCount"]);
      const isWatching = viewerSubscription === "SUBSCRIBED";

      const username = match.params.user;
      const reponame = match.params.repo;

      return (
        <>
          <RepoHeader>
            <Container>
              <BreadCrumbs>
                <GoRepo />
                <Link to={`/${username}`}>{username}</Link>/
                <Link to={`/${username}/${reponame}`}>{reponame}</Link>
              </BreadCrumbs>
              <RepoActions>
                <Starrable isStarred={viewerHasStarred} stars={stars} id={id} />
                <Watchable isWatching={isWatching} id={id} />
              </RepoActions>
            </Container>
          </RepoHeader>
          <RepoDescription
            dangerouslySetInnerHTML={{ __html: descriptionHTML }}
          />
          <FileListWrapper>
            <Files>
              {files.map(file => (
                <RepoItem key={file.oid} name={file.name} type={file.type} />
              ))}
            </Files>
          </FileListWrapper>
        </>
      );
    }}
  </Query>
);

export default ProjectRepo;
