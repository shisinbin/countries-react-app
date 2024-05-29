import React from 'react';

import CountrySearchForm from '../CountrySearchForm';
import CountryDetail from '../CountryDetail';
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

  if (selectedCountry)
    return (
      <CountryDetail
        country={selectedCountry}
        handleGoBack={() => setSelectedCountry(null)}
        countries={countries}
        handleCountrySelect={(c) => setSelectedCountry(c)}
      />
    );

  return (
    <>
      {isLoading && <Loader />}
      {countries.length !== 0 && (
        <>
          <CountrySearchForm
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            region={region}
            setRegion={setRegion}
          />
          <CountryResultsGrid
            handleCountrySelect={(c) => setSelectedCountry(c)}
            currentCountries={currentCountries}
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
