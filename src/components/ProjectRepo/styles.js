import styled from "styled-components";

export const FileListWrapper = styled.div`
  position: relative;
  top: 24px;
  display: flex;
`;

export const Files = styled.div`
  border: 1px solid #d1d5da;
  flex-grow: 1;
`;

export const RepoHeader = styled.div`
  padding: 40px;
  background-color: #fafbfc;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    padding: 20px;
  }
`;

export const Container = styled.div`
  width: 80%;
  max-width: 1012px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const BreadCrumbs = styled.div`
  @media (max-width: 700px) {
    margin-bottom: 24px;
  }
  & > a {
    color: #0366d6;
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    margin-right: 2px;
    margin-left: 2px;
  }
  & > a:hover {
    text-decoration: underline;
  }
  & > a:nth-of-type(2) {
    color: #0366d6;
    margin-left: 2px;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const RepoActions = styled.div`
  display: flex;
`;

export const RepoDescription = styled.div`
  color: #24292e;
`;
