import React from 'react';
import Header from '../Header';
import MaxWidthWrapper from '../MaxWidthWrapper';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import styled from 'styled-components';
import Card from '../Card';
import CountrySearch from '../CountrySearch';

function App() {
  return (
    <>
      <Header />
      <MaxWidthWrapper as='main'>
        <CountrySearch />
        <div>
          <button>Back</button>
        </div>
        <CountryGrid>
          <Card>1</Card>
          <Card>2</Card>
          <Card>3</Card>
          <Card>4</Card>
          <Card>5</Card>
          <Card>6</Card>
          <Card>7</Card>
          <Card>8</Card>
        </CountryGrid>
      </MaxWidthWrapper>

      <GlobalStyles />
    </>
  );
}

const CountryGrid = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export default App;
