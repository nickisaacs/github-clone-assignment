import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper, SearchBox, Button } from "./styles";

class Header extends React.PureComponent {
  state = {
    username: ""
  };

  handleChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  render() {
    return (
      <HeaderWrapper>
        <SearchBox
          placeholder="Jump to user"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <Link to={`/user/${this.state.username}`}>
          <Button>Go</Button>
        </Link>
      </HeaderWrapper>
    );
  }
}

export default Header;
