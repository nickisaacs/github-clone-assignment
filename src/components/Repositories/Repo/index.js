import React from "react";
import { RepoWrapper, MiscInfo } from "./styles";
import get from "lodash/get";
import { GoStar, GoPrimitiveDot } from "react-icons/go";

class Repo extends React.PureComponent {
  render() {
    const {
      repoURL,
      repoName,
      repoDescription,
      primaryLanguage,
      stargazers
    } = this.props;
    const language = get(primaryLanguage, ["name"]);
    let starCount = get(stargazers, ["totalCount"]);
    return (
      <RepoWrapper>
        <a href={repoURL}>{repoName}</a>
        <p>{repoDescription}</p>
        <MiscInfo>
          {language && (
            <span>
              <GoPrimitiveDot />
              {language}
            </span>
          )}
          {starCount > 0 && (
            <span>
              <GoStar />
              {starCount}
            </span>
          )}
        </MiscInfo>
      </RepoWrapper>
    );
  }
}

export default Repo;
