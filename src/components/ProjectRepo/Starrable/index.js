import React from "react";
import { Mutation } from "react-apollo";
import { GoStar } from "react-icons/go";
import { StarrableWrapper } from "./styles";
import { ADD_STAR, REMOVE_STAR } from "../../../graphql/mutations";

class Starrable extends React.PureComponent {
  render() {
    const { isStarred, stars } = this.props;
    const mutationAction = isStarred ? REMOVE_STAR : ADD_STAR;

    return (
      <Mutation mutation={mutationAction} variables={{ id: this.props.id }}>
        {(toggleStar, { data, loading, error }) => (
          <StarrableWrapper>
            <span onClick={toggleStar}>
              <GoStar />
              {isStarred ? "Unstar" : "Star"}
            </span>
            <span>{stars}</span>
          </StarrableWrapper>
        )}
      </Mutation>
    );
  }
}

export default Starrable;
