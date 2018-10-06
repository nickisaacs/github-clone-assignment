import React from "react";
import { RepoWrapper, MiscInfo } from "./styles";
import get from "lodash/get";
import { GoStar, GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";

class Repo extends React.PureComponent {
  render() {
    const {
      repoName,
      repoDescription,
      primaryLanguage,
      stargazers,
      username
    } = this.props;
    const language = get(primaryLanguage, ["name"]);
    let starCount = get(stargazers, ["totalCount"]);
    return (
      <RepoWrapper>
        <Link to={`/${username}/${repoName}`}>
          <span>{repoName}</span>
        </Link>
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
