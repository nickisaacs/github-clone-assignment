import styled from "styled-components";

export const ProfileHomeWrapper = styled.div`
  position: relative;
  top: 24px;
  display: grid;
  grid-template-columns: 200px 800px;
  grid-column-gap: 24px;
  margin-bottom: 48px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
  & > button {
    grid-column: 2/2;
    display: inline-block;
    padding: 4px 16px;
    margin: 16px auto;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 600;
`;
