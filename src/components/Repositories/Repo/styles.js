import styled from "styled-components";

export const RepoWrapper = styled.div`
  border: 1px solid #d1d5da;
  display: grid;
  grid-row-gap: 8px;
  padding: 16px;
  width: 359px;
  @media (max-width: 700px) {
    width: 80%;
    margin: 0 auto;
    padding: 8px 16px;
  }
  border-radius: 3px;
  & > a {
    color: #0366d6;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
  }
  & > a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  & > p {
    font-size: 12px;
    color: #586069;
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const MiscInfo = styled.div`
  display: flex;
  @media (max-width: 700px) {
    display: none;
  }
  & > span:first-of-type {
    font-size: 12px;
    color: #586069;
    margin-right: 16px;
    & > svg {
      color: #f1e05a;
      font-size: 24px;
      vertical-align: middle;
      margin-right: 4px;
    }
  }
  & > span:nth-of-type(2) {
    font-size: 12px;
    color: #586069;
    font-weight: 600;
    & > svg {
      font-size: 16px;
      vertical-align: sub;
      margin-right: 4px;
    }
  }
`;
