import React from 'react';
import styled from 'styled-components';

function CountryResultsGrid({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export default CountryResultsGrid;
