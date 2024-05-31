import React from 'react';
import styled from 'styled-components';
import { Moon, Sun } from 'react-feather';

import MaxWidthWrapper from '../MaxWidthWrapper';
import { ELEVATIONS } from '../../constants';

function Header({ theme, themeToggler }) {
  return (
    <Wrapper>
      <Content>
        <Title>Where in the world?</Title>
        <ThemeButton onClick={themeToggler}>
          {theme === 'light' ? (
            <>
              <Moon size={14} />
              Dark Mode
            </>
          ) : (
            <>
              <Sun size={14} />
              Light Mode
            </>
          )}
        </ThemeButton>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  --shadow-color: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.elements};
  box-shadow: ${ELEVATIONS.small};
  margin-bottom: 32px;
`;

const Content = styled(MaxWidthWrapper)`
  display: flex;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 16px;
`;

const ThemeButton = styled.button`
  padding: 8px;
  margin: -8px;
  margin-left: auto;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export default Header;
