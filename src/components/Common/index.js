import styled from "styled-components";

export const FixedContainer = styled.div`
  width: 80%;
  max-width: 1012px;
  margin: 16px auto;
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
