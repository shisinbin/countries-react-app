import React from 'react';
import styled from 'styled-components';

import Card from '../Card';

function CountryCard({ country }) {
  const { name, population, flag, region, capital } = country;
  return (
    <Card>
      <Wrapper>
        <ImageWrapper>
          <Image alt={`Flag of ${name}`} src={flag} />
        </ImageWrapper>
        <Details>
          <Heading>{name}</Heading>
          {population && (
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
    </Card>
  );
}

const Wrapper = styled.article`
  /* display: flex;
  flex-direction: column; */
  font-size: 14px;
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
`;

const Heading = styled.h2`
  font-size: 16px;
  margin-bottom: 8px;
`;

export default CountryCard;
