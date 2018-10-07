import React from "react";
import { Mutation } from "react-apollo";
import { GoEye } from "react-icons/go";
import { WatchableWrapper } from "./styles";
import { TOGGLE_WATCH } from "../../../graphql/mutations";

class Watchable extends React.PureComponent {
  render() {
    const { isWatching } = this.props;
    const subscriptionAction = isWatching ? "UNSUBSCRIBED" : "SUBSCRIBED";

    return (
      <Mutation
        mutation={TOGGLE_WATCH}
        variables={{
          id: this.props.id,
          viewerSubscription: subscriptionAction
        }}
      >
        {(toggleWatch, { data, loading, error }) => (
          <WatchableWrapper>
            <span onClick={toggleWatch}>
              <GoEye />
              {isWatching ? "Stop Watching" : "Watch"}
            </span>
          </WatchableWrapper>
        )}
      </Mutation>
    );
  }
}

export default Watchable;
