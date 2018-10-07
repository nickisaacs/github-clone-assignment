import React from "react";
import { RepoListWrapper, RepoTab, RepoList } from "./styles";
import Repo from "./Repo";
import get from "lodash/get";

class Repositories extends React.PureComponent {
  render() {
    const repos = get(this.props, ["repositories", "edges"]);
    return (
      <RepoListWrapper>
        <RepoTab>Repositories</RepoTab>
        <RepoList>
          {repos.map(({ node }) => (
            <Repo
              key={node.id}
              repoID={node.id}
              repoName={node.name}
              repoURL={node.url}
              repoDescription={node.description}
              stargazers={node.stargazers}
              primaryLanguage={node.primaryLanguage}
              username={node.owner.login}
            />
          ))}
        </RepoList>
      </RepoListWrapper>
    );
  }
}

export default Repositories;
