import React from "react";
import {
  ProfileWrapper,
  ProfileDetails,
  ProfileImage,
  ProfileBio
} from "./styles";

class Profile extends React.PureComponent {
  render() {
    const { image, displayName, username, bio } = this.props;
    return (
      <ProfileWrapper>
        <ProfileImage alt={username} src={image} />
        <ProfileDetails>
          <h2>{displayName}</h2>
          <p>{username}</p>
        </ProfileDetails>
        <ProfileBio>{bio}</ProfileBio>
      </ProfileWrapper>
    );
  }
}

export default Profile;
