import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

import Header from '../Header';
import CountrySearchForm from '../CountrySearchForm';
import MaxWidthWrapper from '../MaxWidthWrapper';
import CountryCard from '../CountryCard/CountryCard';
import Card from '../Card';

import GlobalStyles from '../GlobalStyles/GlobalStyles';
import CountryResultsGrid from '../CountryResultsGrid/CountryResultsGrid';

const ENDPOINT = 'http://localhost:8000/countries';

// async function fetcher(endpoint) {
//   const response = await fetch(endpoint);

//   if (!response.ok) {
//     throw new Error('Network response was no okay');
//   }

//   return await response.json();
// }

function App() {
  // const {
  //   data: countries,
  //   isLoading,
  //   error,
  // } = useSWR(ENDPOINT, fetcher);

  const [countries, setCountries] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  // idle || loading || success
  const [status, setStatus] = React.useState('idle');

  const [searchTerm, setSearchTerm] = React.useState('');
  const [region, setRegion] = React.useState('');

  React.useEffect(() => {
    setStatus('loading');

    async function fetchData() {
      try {
        const response = await fetch(ENDPOINT);

        if (!response.ok) {
          throw new Error(
            `Error: (${response.status}) ${response.statusText}`
          );
        }

        const json = await response.json();

        setCountries(json);
        setStatus('success');
      } catch (err) {
        console.error(err.message);
        setStatus('error');
      }
    }

    fetchData();
  }, []);

  const filteredCountries = React.useMemo(() => {
    return countries.filter((country) => {
      const matchesSearchTerm = country.name
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());
      const matchesRegion =
        region !== '' ? country.region === region : true;

      return matchesSearchTerm && matchesRegion;
    });
  }, [countries, searchTerm, region]);

  return (
    <>
      <Header />
      <MaxWidthWrapper as='main'>
        {status === 'idle' && <p>Hello</p>}
        {status === 'loading' && <p>Loading...</p>}
        {status === 'error' && <p>Error</p>}
        {status === 'success' && (
          <>
            <CountrySearchForm
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              region={region}
              setRegion={setRegion}
            />
            <CountryResultsGrid>
              {filteredCountries?.map((country) => (
                <CountryCard
                  key={country.numericCode}
                  country={country}
                />
              ))}
            </CountryResultsGrid>
          </>
        )}
      </MaxWidthWrapper>

      <GlobalStyles />
    </>
  );
}

export default App;
