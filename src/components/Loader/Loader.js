import React from 'react';
import styled, { keyframes } from 'styled-components';

import VisuallyHidden from '../VisuallyHidden';

function Loader() {
  return (
    <Wrapper>
      <VisuallyHidden>Loading...</VisuallyHidden>
      <StyledSvg
        viewBox='0 0 38 38'
        xmlns='http://www.w3.org/2000/svg'
        stroke='#000'
      >
        <g fill='none' fillRule='evenodd'>
          <g transform='translate(1 1)' strokeWidth='2'>
            <circle strokeOpacity='.25' cx='18' cy='18' r='18' />
            <path d='M36 18c0-9.94-8.06-18-18-18' />
          </g>
        </g>
      </StyledSvg>
    </Wrapper>
  );
}

const spin = keyframes`
  from {
    transform: rotate(-45deg);
  }
  to {
    transform: rotate(315deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
`;

const StyledSvg = styled.svg`
  width: 38px;
  height: 38px;
  animation: 1s ${spin} ease-in-out infinite;

  & g {
    & circle {
      stroke: ${({ theme }) => theme.loaderTrack};
    }

    & path {
      stroke: ${({ theme }) => theme.loaderFill};
    }
  }
`;

export default Loader;
