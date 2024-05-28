import React from 'react';
import styled from 'styled-components';
import { Search } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import { ELEVATIONS } from '../../constants';

function IconInput({ id, label, ...delegated }) {
  return (
    <Wrapper htmlFor={id}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Search size={24} strokeWidth={1.5} />
      </IconWrapper>
      <TextInput id={id} {...delegated} />
    </Wrapper>
  );
}

const Wrapper = styled.label`
  display: flex;
  position: relative;
  border-radius: 8px;
  max-width: 480px;
  flex: 1 1 480px;
  margin-right: auto;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12px;
  margin: auto;
  height: 24px;
`;

const TextInput = styled.input`
  --shadow-color: ${({ theme }) => theme.shadow};
  padding: 12px 16px;
  padding-left: calc(24px * 2);
  outline-offset: 2px;
  border: none;
  border-radius: 8px;
  box-shadow: ${ELEVATIONS.medium};
  flex: 1;
  background-color: ${({ theme }) => theme.elements};
  /* color: ${({ theme }) => theme.text}; */

  &::placeholder {
    font-size: 14px;
    /* really hacky solution here... */
    /* color: ${({ theme }) =>
      theme.inputText === 'var(--dark-gray-input)'
        ? theme.inputText
        : 'inherit'}; */
  }

  /* &:hover,
  &:focus {
    box-shadow: ${ELEVATIONS.large};
    transform: scale(1.01);
  } */
`;

export default IconInput;
