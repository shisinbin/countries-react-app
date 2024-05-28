import React from 'react';
import styled from 'styled-components';

import CountryCard from '../CountryCard';

function CountryResultsGrid({
  filteredCountries,
  handleCountrySelect,
}) {
  return (
    <Wrapper>
      {filteredCountries?.map((country) => (
        <CountryCard
          key={country.numericCode}
          country={country}
          handleCountrySelect={handleCountrySelect}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: stretch;
`;

export default CountryResultsGrid;
