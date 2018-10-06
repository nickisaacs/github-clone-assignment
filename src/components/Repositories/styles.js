import styled from "styled-components";

export const RepoListWrapper = styled.div``;

export const RepoTab = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #24292e;
  border-bottom: 2px solid #e36209;
  padding: 0 16px 16px 16px;
`;

export const RepoList = styled.div`
  position: relative;
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 16px;
`;
