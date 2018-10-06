import React from "react";
import { GoFileDirectory, GoFile } from "react-icons/go";
import { RepoItemIcon, RepoItemWrapper } from "./styles";

class RepoItem extends React.PureComponent {
  render() {
    const { name, type } = this.props;

    let Icon = (
      <RepoItemIcon>
        <GoFile />
      </RepoItemIcon>
    );
    if (type === "tree") {
      Icon = (
        <RepoItemIcon>
          <GoFileDirectory />
        </RepoItemIcon>
      );
    }

    return (
      <RepoItemWrapper>
        {Icon}
        {name}
      </RepoItemWrapper>
    );
  }
}

export default RepoItem;
