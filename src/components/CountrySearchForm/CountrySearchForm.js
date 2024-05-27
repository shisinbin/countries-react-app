import React from 'react';
import styled from 'styled-components';

import Select from '../Select';
import IconInput from '../IconInput';

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function CountrySearchForm({
  searchTerm,
  setSearchTerm,
  region,
  setRegion,
}) {
  // const [searchTerm, setSearchTerm] = React.useState('');
  // const [region, setRegion] = React.useState('');

  const id = React.useId();
  const searchTermId = `${id}-searchTerm`;
  const regionId = `${id}-region`;

  return (
    <Wrapper onSubmit={(ev) => ev.preventDefault()}>
      <IconInput
        id={searchTermId}
        label='Search'
        placeholder='Search for a country...'
        type='text'
        value={searchTerm}
        onChange={(ev) => setSearchTerm(ev.target.value)}
      />
      <SelectLabel htmlFor={regionId}>Filter by Region:</SelectLabel>
      <Select
        id={regionId}
        value={region}
        name='region'
        onChange={(event) => setRegion(event.target.value)}
      >
        <option value={''}>All</option>
        {REGIONS.map((region) => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </Select>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 32px 0;
`;

const SelectLabel = styled.label`
  font-size: 14px;
`;

export default CountrySearchForm;
