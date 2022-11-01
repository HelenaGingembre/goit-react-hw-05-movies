import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const SearchBoxContainer = styled.div`
  display: inline-flex;
  align-items: center;fi
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const InputSearch = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 10px;
  font: inherit;
  border: 1px gray dotted;
`;

export const FiSearchIcon = styled(FiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 4px;
  bottom: 2px;
`;

export const Btn = styled.button`
  width: 30px;
  height: 25px;
  border: transparent;
  border-left: 1px solid grey;
  border-radius: 5px;
  background-color: transparent;
  position: absolute;
  right: 4px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    border-right: 1px solid lightgrey;
  }
`;
