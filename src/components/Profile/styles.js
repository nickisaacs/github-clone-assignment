import styled from "styled-components";

export const ProfileWrapper = styled.div`
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export const ProfileDetails = styled.div`
  & > h2 {
    margin-bottom: 0;
  }
  & > p:first-of-type {
    font-weight: 300;
    font-size: 20px;
    margin: 0;
    color: #666;
  }
`;

export const ProfileImage = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 200px;
  @media (max-width: 700px) {
    width: 100px;
    height: 100px;
  }
`;

export const ProfileBio = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #6a737d;
  @media (max-width: 700px) {
    grid-column: 1/3;
  }
`;
