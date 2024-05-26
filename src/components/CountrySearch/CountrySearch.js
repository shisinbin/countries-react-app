import React from 'react';

import Select from '../Select';

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function CountrySearch() {
  const [region, setRegion] = React.useState('');

  const id = React.useId();
  const searchTermId = `${id}-searchTerm`;
  const regionId = `${id}-region`;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type='text' id={searchTermId} />
      <label htmlFor={regionId}>Filter By Region:</label>
      <Select
        id={regionId}
        value={region}
        name='region'
        onChange={(event) => setRegion(event.target.value)}
      >
        {/* <option value={''} disabled selected>
          Filter by region
        </option> */}
        <option value={''}>All</option>
        {REGIONS.map((region) => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </Select>
    </form>
  );
}

export default CountrySearch;
