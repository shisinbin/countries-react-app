import React from 'react';
import styled from 'styled-components';

function Card({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  background-color: var(--white);
  padding: 16px;
  border-radius: 8px;
`;

export default Card;
