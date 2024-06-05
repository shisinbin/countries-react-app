import React from 'react';
import styled from 'styled-components';

import { ELEVATIONS } from '../../constants';

function Card({ children, onClick = null }) {
  return (
    <>
      {onClick ? (
        <StyledButton onClick={onClick}>
          <ContentWrapper>{children}</ContentWrapper>
        </StyledButton>
      ) : (
        <StyledDiv>
          <ContentWrapper>{children}</ContentWrapper>
        </StyledDiv>
      )}
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  cursor: pointer;
`;

const ContentWrapper = styled.article`
  flex-grow: 1;
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.elements};
  border-radius: 8px;
  box-shadow: ${ELEVATIONS.medium};

  /* To hide flag beyond rounded corners */
  overflow: hidden;

  &:hover,
  &:focus {
    box-shadow: ${ELEVATIONS.large};
    transform: scale(1.01);
  }
`;

export default Card;
