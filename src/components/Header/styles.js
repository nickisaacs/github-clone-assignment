import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #24292e;
  padding: 8px 16px 8px 16px;
  text-align: center;
  margin-bottom: 24px;
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

export const Button = styled.button`
  background-position: center;
  background-color: #2ec852;
  outline: none;
  border: none;
  padding: 8px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-left: 4px;
  transition-duration: 0.4s;
  &:hover {
    background-color: #48e26c;
  }
  &:active {
    background-color: #2ec852;
    background-size: 100%;
    transition: background 0s;
  }
`;
