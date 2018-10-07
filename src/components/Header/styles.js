import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #24292e;
  padding: 8px 16px 8px 16px;
  text-align: center;
`;

export const SearchBox = styled.input`
  background-color: #404448;
  border: none;
  padding: 8px;
  font-size: 16px;
  color: #fff;
  transition-duration: 0.4s;
  &::placeholder {
    color: #777a7d;
  }
  &:focus {
    background-color: #fafbfc;
    color: #24292e;
    outline: none;
  }
`;
