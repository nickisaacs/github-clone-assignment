import styled from "styled-components";

export const ProfileHomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 800px;
  grid-column-gap: 24px;
  max-width: 1012px;
  margin: 0 auto;
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
