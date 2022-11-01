import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const SearchBoxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const InputSearch = styled.input`
  padding: 8px 34px 8px 8px;
  border-radius: 10px;
  font: inherit;
  border: none;
  border: 1px gray dotted;
  box-sizing: border-box;
  &:focus-visible {
    border-right: 1px solid lightgrey;
  }
`;

export const FiSearchIcon = styled(FiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 4px;
  bottom: 4px;
`;

export const Btn = styled.button`
  width: 30px;
  height: 30px;
  border: transparent;
  border-left: 1px solid grey;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    rgba(30, 213, 169, 1) 0%,
    rgba(1, 180, 228, 1) 100%
  );

  position: absolute;
  left: 260px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
  &:active {
    border-right: 1px solid lightgrey;
  }
`;
