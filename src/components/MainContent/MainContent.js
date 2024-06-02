import React from 'react';

import CountryDetail from '../CountryDetail';
import CountrySearchForm from '../CountrySearchForm';
import CountryResultsGrid from '../CountryResultsGrid';
import Loader from '../Loader';

import { COUNTRIES_PER_PAGE } from '../../constants';
import { useFetch } from '../../hooks/useFetch';

function MainContent() {
  const { data: countries, isLoading } = useFetch();

  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [region, setRegion] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleRegionChange = (region) => {
    setRegion(region);
    setCurrentPage(1);
  };

  const filteredCountries = React.useMemo(() => {
    return countries.filter((country) => {
      const matchesSearchTerm = country.countryName
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());
      const matchesRegion =
        region !== '' ? country.region === region : true;

      return matchesSearchTerm && matchesRegion;
    });
  }, [countries, searchTerm, region]);

  const startIndex = (currentPage - 1) * COUNTRIES_PER_PAGE;
  const countriesForCurrentPage = filteredCountries.slice(
    startIndex,
    startIndex + COUNTRIES_PER_PAGE
  );
  const totalPages = Math.ceil(
    filteredCountries.length / COUNTRIES_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (selectedCountry)
    return (
      <CountryDetail
        country={selectedCountry}
        handleGoBack={() => setSelectedCountry(null)}
        countries={countries}
        handleCountrySelect={setSelectedCountry}
      />
    );

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && countries.length !== 0 && (
        <>
          <CountrySearchForm
            searchTerm={searchTerm}
            handleSearchTermChange={handleSearchTermChange}
            region={region}
            handleRegionChange={handleRegionChange}
          />
          <CountryResultsGrid
            handleCountrySelect={setSelectedCountry}
            countries={countriesForCurrentPage}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
        </>
      )}
    </>
  );
}

export default MainContent;
