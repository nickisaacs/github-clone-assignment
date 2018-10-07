import styled from "styled-components";

export const WatchableWrapper = styled.div`
  margin-left: 8px;
  & > span:first-of-type {
    cursor: pointer;
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
    padding: 4px;
    border: 1px solid #d1d5da;
    font-weight: 500;
    & > svg {
      margin-right: 2px;
      vertical-align: middle;
    }
  }
  & > span:nth-of-type(2) {
    border: 1px solid #d1d5da;
    border-left: none !important;
    padding: 4px;
    min-width: 24px;
    background-color: white;
  }
`;
