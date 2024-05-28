import React from 'react';
import styled from 'styled-components';
import { ChevronDown } from 'react-feather';

import { getDisplayedValue } from './Select.helpers';
import { ELEVATIONS } from '../../constants';

function Select({ id, value, children, ...delegated }) {
  /*
    The children are the <option>'s. So this helper dives into the values
    of each of the child elements, find which ones match, and then returns
    the appropriate displayed value.
  */
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect id={id} value={value} {...delegated}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper>
          <ChevronDown size={24} strokeWidth={1} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  --shadow-color: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.elements};
  font-size: 14px;
  padding: 12px 16px;
  border-radius: 8px;
  padding-right: 52px;
  box-shadow: ${ELEVATIONS.medium};

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: red;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: 24px;
  width: 24px;
  pointer-events: none;
`;

export default Select;
