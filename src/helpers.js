export const normaliseJsonData = (data) => {
  return data.map((country) => {
    // if (!Object.keys(country).includes('currencies')) {
    //   console.log(
    //     `country with name ${country.name} has no currencies key!`
    //   );
    // }
    return {
      numericCode: country.numericCode || Math.random().toString(),
      alpha3Code: country.alpha3Code,
      flag: country.flag,
      countryName: country.name || null,
      population: Number.isFinite(country.population)
        ? country.population
        : null,
      region: country.region || null,
      subregion: country.subregion || null,
      capital: country.capital || null,
      nativeNames: [country.nativeName] || null,
      topLevelDomain: country.topLevelDomain || null,
      currencies: country.currencies?.map((cur) => cur.name) || [],
      languages: country.languages?.map((lang) => lang.name) || [],
      borders: country.borders || [],
    };
  });
};

export const normaliseApiData = (data) => {
  return data.map((country) => {
    const nativeNameObj = country.name.nativeName || {};

    const hasMultipleLanguages =
      Object.keys(nativeNameObj).length > 1;

    const nativeNames = Object.entries(nativeNameObj).map(
      ([key, value]) => {
        return hasMultipleLanguages
          ? `${value.common} (${key.toUpperCase()})`
          : value.common;
      }
    );

    const currencies = Object.values(country.currencies || {}).map(
      (cur) => cur.name
    );

    const languages = Object.values(country.languages || {});

    return {
      numericCode: country.ccn3 || Math.random().toString(),
      alpha3Code: country.cca3,
      flag: country.flags.svg,
      countryName: country.name.common || null,
      population: country.population || null,
      region: country.region || null,
      subregion: country.subregion || null,
      capital: country.capital?.[0] || null,
      nativeNames,
      topLevelDomain: country.tld?.[0] || null,
      currencies,
      languages,
      borders: country.borders || [],
    };
  });
};
