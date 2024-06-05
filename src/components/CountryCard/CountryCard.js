import React from 'react';
import styled from 'styled-components';

import Card from '../Card';

function CountryCard({ country, handleCountrySelect }) {
  const { countryName, population, flag, region, capital } = country;
  return (
    <Card onClick={() => handleCountrySelect(country)}>
      <ImageWrapper>
        <Image alt={`Flag of ${countryName}`} src={flag} />
      </ImageWrapper>
      <Details>
        <Heading>{countryName}</Heading>
        {Number.isFinite(population) && (
          <p>
            <strong>Population:</strong> {population.toLocaleString()}
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
    </Card>
  );
}

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
