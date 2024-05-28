import React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import { ELEVATIONS } from '../../constants';

function CountryCard({ country, handleCountrySelect }) {
  const { name, population, flag, region, capital } = country;
  return (
    <WrapperButton onClick={() => handleCountrySelect(country)}>
      <Wrapper>
        <ImageWrapper>
          <Image alt={`Flag of ${name}`} src={flag} />
        </ImageWrapper>
        <Details>
          <Heading>{name}</Heading>
          {Number.isFinite(population) && (
            <p>
              <strong>Population:</strong>{' '}
              {population.toLocaleString()}
            </p>
          )}
          {region && (
            <p>
              <strong>Region:</strong> {region}
            </p>
          )}
          {capital && (
            <p>
              <strong>Capital:</strong> {capital}
            </p>
          )}
        </Details>
      </Wrapper>
    </WrapperButton>
  );
}

const WrapperButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

const Wrapper = styled.article`
  --shadow-color: ${({ theme }) => theme.shadow};
  flex-grow: 1;
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.elements};
  border-radius: 8px;
  box-shadow: ${ELEVATIONS.medium};
  cursor: pointer;

  /* To hide flag beyond rounded corners */
  overflow: hidden;

  &:hover,
  &:focus {
    box-shadow: ${ELEVATIONS.large};
    transform: scale(1.01);
  }
`;

const ImageWrapper = styled.div`
  margin: -16px;
  margin-bottom: 16px;
  height: 150px;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Details = styled.section`
  margin-bottom: -16px;
  padding-bottom: 32px;
  font-size: 14px;
`;

const Heading = styled.h2`
  font-size: 16px;
  margin-bottom: 8px;
`;

export default CountryCard;
