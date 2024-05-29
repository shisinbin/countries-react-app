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
  clearSearchTerm,
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
        clearSearchTerm={clearSearchTerm}
      />
      <SelectWrapper>
        <SelectLabel htmlFor={regionId}>
          Filter by Region:
        </SelectLabel>
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
      </SelectWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;

  @media ${({ theme }) => theme.queries.tabletAndSmaller} {
    display: revert;
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${({ theme }) => theme.queries.tabletAndSmaller} {
    margin-top: 16px;
  }
`;

const SelectLabel = styled.label`
  font-size: 14px;
  text-align: right;
`;

export default CountrySearchForm;
