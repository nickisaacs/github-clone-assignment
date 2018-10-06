import styled from "styled-components";

export const FileListWrapper = styled.div`
  position: relative;
  top: 24px;
  display: flex;
`;

export const Files = styled.div`
  border: 1px solid #d1d5da;
  max-width: 1012px;
  margin: 0 auto;
  flex-grow: 0.8;
`;

export const RepoHeader = styled.div`
  height: 100px;
  background-color: #fafbfc;
  display: flex;
  justify-content: center;
  align-items: center;
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
