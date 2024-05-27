import React from 'react';
import styled from 'styled-components';

import { ELEVATIONS } from '../../constants';

function Card({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  background-color: var(--white);
  padding: 16px;
  border-radius: 8px;
  box-shadow: ${ELEVATIONS.medium};
  cursor: pointer;
  /* transition: transform 100ms;
  will-change: transform; */

  /* To hide flag beyond rounded corners */
  overflow: hidden;

  &:hover {
    box-shadow: ${ELEVATIONS.large};
    transform: scale(1.01);
  }
`;

export default Card;