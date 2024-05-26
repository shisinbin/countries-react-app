import React from 'react';
import { Moon } from 'react-feather';

import MaxWidthWrapper from '../MaxWidthWrapper';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <Content>
        <Title>Where in the world?</Title>
        <ThemeAction>
          <Moon size={14} />
          Dark Mode
        </ThemeAction>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: var(--white);
`;

const Content = styled(MaxWidthWrapper)`
  display: flex;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 16px;
`;

const ThemeAction = styled.button`
  margin-left: auto;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export default Header;
