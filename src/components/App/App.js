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
import CountryDetail from '../CountryDetail/CountryDetail';

const ENDPOINT = 'http://localhost:8000/countries';

function App() {
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

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleGoBack = () => setSelectedCountry(null);

  return (
    <>
      <Header />
      <MaxWidthWrapper as='main'>
        {selectedCountry ? (
          <CountryDetail
            country={selectedCountry}
            handleGoBack={handleGoBack}
            countries={countries}
            handleCountrySelect={handleCountrySelect}
          />
        ) : (
          <>
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
                <CountryResultsGrid
                  filteredCountries={filteredCountries}
                  handleCountrySelect={handleCountrySelect}
                />
              </>
            )}
          </>
        )}
      </MaxWidthWrapper>

      <GlobalStyles />
    </>
  );
}

export default App;
