import styled from "styled-components";

export const ProfileWrapper = styled.div``;

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
  & > p:nth-of-type(2) {
    font-size: 14px;
    font-weight: 300;
    color: #6a737d;
  }
`;

export const ProfileImage = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 200px;
`;
