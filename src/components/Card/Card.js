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
  box-shadow: ${ELEVATIONS.large};
`;

export default Card;
