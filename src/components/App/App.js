import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from '../Header';
import CountrySearchForm from '../CountrySearchForm';
import MaxWidthWrapper from '../MaxWidthWrapper';
import CountryDetail from '../CountryDetail/CountryDetail';
import CountryResultsGrid from '../CountryResultsGrid/CountryResultsGrid';

import GlobalStyles from '../GlobalStyles/GlobalStyles';
import { lightTheme, darkTheme } from '../../themes';
import { COUNTRIES_PER_PAGE } from '../../constants';

const ENDPOINT = 'http://localhost:8000/countries';

function App() {
  const [countries, setCountries] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  // idle || loading || success
  const [status, setStatus] = React.useState('idle');

  const [searchTerm, setSearchTerm] = React.useState('');
  const [region, setRegion] = React.useState('');

  const [currentPage, setCurrentPage] = React.useState(1);

  // light || dark
  const [theme, setTheme] = React.useState(() => {
    const savedMode =
      window.localStorage.getItem('preferred-mode') || 'light';
    return savedMode;
  });

  function themeToggler() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

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
    // any time it's required to filter the countries,
    // set current page to the first
    setCurrentPage(1);

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

  const clearSearchTerm = () => setSearchTerm('');

  const totalPages = Math.ceil(
    filteredCountries.length / COUNTRIES_PER_PAGE
  );

  const currentCountries = filteredCountries.slice(
    (currentPage - 1) * COUNTRIES_PER_PAGE,
    currentPage * COUNTRIES_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  React.useEffect(() => {
    window.localStorage.setItem('preferred-mode', theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Header theme={theme} themeToggler={themeToggler} />
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
            {status === 'idle' && null}
            {status === 'loading' && <p>Loading...</p>}
            {status === 'error' && <p>Error</p>}
            {status === 'success' && (
              <>
                <CountrySearchForm
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  region={region}
                  setRegion={setRegion}
                  clearSearchTerm={clearSearchTerm}
                />
                <CountryResultsGrid
                  filteredCountries={filteredCountries}
                  handleCountrySelect={handleCountrySelect}
                  currentCountries={currentCountries}
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                  totalPages={totalPages}
                />
              </>
            )}
          </>
        )}
      </MaxWidthWrapper>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
