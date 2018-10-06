import React from "react";
import { ProfileWrapper, ProfileDetails, ProfileImage } from "./styles";

class Profile extends React.PureComponent {
  render() {
    const { image, displayName, username, bio } = this.props;
    return (
      <ProfileWrapper>
        <ProfileImage alt={username} src={image} />
        <ProfileDetails>
          <h2>{displayName}</h2>
          <p>{username}</p>
          <p>{bio}</p>
        </ProfileDetails>
      </ProfileWrapper>
    );
  }
}

export default Profile;
