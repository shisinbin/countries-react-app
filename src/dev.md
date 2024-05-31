# Development thoughts

## Managing state

At one point, `MainContent` has this logic:

```
function MainContent() {
  const { data: countries, isLoading } = useFetch();

  const [searchTerm, setSearchTerm] = React.useState('');
  const [region, setRegion] = React.useState('');

  const [currentPage, setCurrentPage] = React.useState(1);

  const filteredCountries = React.useMemo(() => {
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

  ...
}
```

I have a single state source `countries` coming from a custom `useFetch` hook.

I derive `filteredCountries` and `currentCountries` based on `countries` without creating new state.

The approach is good practise as it avoids duplicating state and ensures all derived data is consistently updated when the **base state** (`countries`) changes.

However, the code feels weighty and a little too complicated? Or at least doesn't read very well? The memoization of `filteredCountries` is kinda hard to follow in the midst of trying to follow the logic of this component.

So one solution might be to introduce more custom hooks to improve readability, to separate concerns, to encapsulate a piece of logic. So, here's a hook for filtering the countries then:

```
import React from 'react';

export const useFilteredCountries = (countries, searchTerm, region) => {
  const [filteredCountries, setFilteredCountries] = React.useState([]);

  React.useEffect(() => {
    const filterCountries = () => {
      return countries.filter((country) => {
        const matchesSearchTerm = country.countryName
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase());
        const matchesRegion = region !== '' ? country.region === region : true;
        return matchesSearchTerm && matchesRegion;
      });
    };

    setFilteredCountries(filterCountries());
  }, [countries, searchTerm, region]);

  return filteredCountries;
};
```

and here's how it would be used in `MainContent`:

```
const filteredCountries = useFilteredCountries(countries, searchTerm, region);
```

The logic is pretty much the same as before - the code will only run when anything in the dependancy array changes. But notice how the hook introduces new state and a new effect. Isn't this bad practise?

Apparently, this practise is normal, good, fine. Because **the hooks do not introduce new base state**. Instead, they use React state _internally_ to manage derived data.

This is apparently common practise in React, using hooks to manage derived state or encapsulate logic in a way that keeps the components focussed.
