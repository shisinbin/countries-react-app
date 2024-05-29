import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from '../Header';
import CountrySearchForm from '../CountrySearchForm';
import MaxWidthWrapper from '../MaxWidthWrapper';
import CountryDetail from '../CountryDetail';
import CountryResultsGrid from '../CountryResultsGrid';
import Loader from '../Loader';

import GlobalStyles from '../GlobalStyles';
import { COUNTRIES_PER_PAGE } from '../../constants';

import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';

function App() {
  const { data: countries, isLoading } = useFetch();
  const { theme, themeToggler, currentTheme } = useTheme();

  const [selectedCountry, setSelectedCountry] = React.useState(null);

  const [searchTerm, setSearchTerm] = React.useState('');
  const [region, setRegion] = React.useState('');

  const [currentPage, setCurrentPage] = React.useState(1);

  const filteredCountries = React.useMemo(() => {
    // any time it's required to filter the countries,
    // reset the current page to 1
    setCurrentPage(1);

    return countries.filter((country) => {
      const matchesSearchTerm = country.countryName
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

  return (
    <ThemeProvider theme={currentTheme}>
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
            {isLoading && <Loader />}
            {countries.length !== 0 && (
              <>
                <CountrySearchForm
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  region={region}
                  setRegion={setRegion}
                  clearSearchTerm={clearSearchTerm}
                />
                <CountryResultsGrid
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
