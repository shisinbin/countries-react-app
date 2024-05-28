import React from 'react';
import styled from 'styled-components';
import { CornerDownLeft } from 'react-feather';
import { ELEVATIONS } from '../../constants';

function InfoDetail({ label, children }) {
  return (
    <p>
      <strong>{label}:</strong> {children}
    </p>
  );
}

function CountryDetail({
  country,
  handleGoBack,
  countries,
  handleCountrySelect,
}) {
  const {
    flag,
    name: countryName,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  const borderCountries =
    borders?.length > 0
      ? countries.filter((country) =>
          borders.includes(country.alpha3Code)
        )
      : null;

  return (
    <>
      <Back onClick={handleGoBack}>
        <IconWrapper>
          <CornerDownLeft size={24} strokeWidth={1.5} />
        </IconWrapper>
        <ButtonText>Back to Home</ButtonText>
      </Back>
      <Wrapper>
        <ImageWrapper>
          <Image src={flag} alt={`Flag of ${countryName}`} />
        </ImageWrapper>
        <Details>
          <Heading>{countryName}</Heading>
          <Info>
            {nativeName && (
              <InfoDetail label={'Native name'}>
                {nativeName}
              </InfoDetail>
            )}
            {population && (
              <InfoDetail label={'Population'}>
                {population.toLocaleString()}
              </InfoDetail>
            )}
            {region && (
              <InfoDetail label={'Region'}>{region}</InfoDetail>
            )}
            {subregion && (
              <InfoDetail label={'Sub Region'}>
                {subregion}
              </InfoDetail>
            )}
            {capital && (
              <InfoDetail label={'Capital'}>{capital}</InfoDetail>
            )}
            {topLevelDomain && (
              <InfoDetail label={'Top Level Domain'}>
                {topLevelDomain.at(0)}
              </InfoDetail>
            )}
            {currencies && currencies.length > 0 && (
              <InfoDetail label={'Currencies'}>
                {currencies
                  .map((currencyObj) => currencyObj.name)
                  .join(', ')}
              </InfoDetail>
            )}
            {languages && languages.length > 0 && (
              <InfoDetail label={'Languages'}>
                {languages
                  .map((languageObj) => languageObj.name)
                  .join(', ')}
              </InfoDetail>
            )}
          </Info>
          {borderCountries && borderCountries.length > 0 && (
            <div>
              <strong>Border Countries:</strong>{' '}
              <Tags>
                {borderCountries.map((country) => (
                  <Tag key={country.numericCode}>
                    <TagButton
                      onClick={() => handleCountrySelect(country)}
                    >
                      {country.name}
                    </TagButton>
                  </Tag>
                ))}
              </Tags>
            </div>
          )}
        </Details>
      </Wrapper>
    </>
  );
}

const Back = styled.button`
  --shadow-color: ${({ theme }) => theme.shadow};
  padding: 12px 16px;
  position: relative;
  padding-left: 44px;
  border-radius: 8px;
  background: ${({ theme }) => theme.elements};
  box-shadow: ${ELEVATIONS.medium};
  font-size: 14px;
  will-change: transform;

  &:hover {
    box-shadow: ${ELEVATIONS.large};
    transform: scale(1.01);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12px;
  margin: auto;
  height: 24px;
`;

const ButtonText = styled.span`
  display: block;
`;

const Wrapper = styled.section`
  margin-top: 32px;
  display: flex;
  gap: 64px;
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 3 / 2;
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Heading = styled.h2``;

const Info = styled.div`
  columns: 2;
  column-gap: 16px;
`;

const Tags = styled.ul`
  display: inline;
  list-style: none;
  padding: 4px 0;
  padding-left: 16px;
`;

const Tag = styled.li`
  display: inline-block;
  margin-bottom: 8px;

  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;

const TagButton = styled.button`
  --shadow-color: ${({ theme }) => theme.shadow};
  padding: 4px 16px;
  border-radius: 4px;
  /* border: 1px dotted lightgray; */
  background-color: ${({ theme }) => theme.elements};
  box-shadow: ${ELEVATIONS.small};

  &:hover {
    box-shadow: ${ELEVATIONS.medium};
    transform: scale(1.01);
  }
`;

export default CountryDetail;
