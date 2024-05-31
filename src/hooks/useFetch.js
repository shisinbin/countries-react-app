import React from 'react';
import { normaliseApiData, normaliseJsonData } from '../helpers';
import localData from '../../data/data.json';

const MAX_TIMEOUT_DURATION = 5000; // 5 seconds
const apiEndpoint = 'https://restcountries.com/v3.1/all';

export const useFetch = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();

    async function fetchWithTimeout(endpoint) {
      const timeoutId = window.setTimeout(() => {
        controller.abort();
      }, MAX_TIMEOUT_DURATION);

      try {
        const response = await fetch(endpoint, {
          signal: controller.signal,
        });
        window.clearTimeout(timeoutId);
        return response;
      } catch (err) {
        window.clearTimeout(timeoutId);
        throw err;
      }
    }

    async function fetchApiData() {
      setIsLoading(true);
      try {
        const response = await fetchWithTimeout(apiEndpoint);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setData(normaliseApiData(json));
      } catch (err) {
        if (err.name === 'AbortError') {
          console.info(
            'Fetch request timed out, using backup instead'
          );
        } else {
          console.warn('Fetch error:', err);
        }
        setData(normaliseJsonData(localData.countries));
      } finally {
        setIsLoading(false);
      }
    }

    fetchApiData();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, isLoading };
};
