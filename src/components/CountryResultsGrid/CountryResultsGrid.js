import React from 'react';
import styled from 'styled-components';
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from 'react-feather';

import CountryCard from '../CountryCard';
import { ELEVATIONS } from '../../constants';

function CountryResultsGrid({
  handleCountrySelect,
  currentCountries,
  currentPage,
  totalPages,
  handlePageChange,
}) {
  return (
    <>
      <Wrapper>
        {currentCountries?.map((country) => (
          <CountryCard
            key={country.numericCode}
            country={country}
            handleCountrySelect={handleCountrySelect}
          />
        ))}
      </Wrapper>
      {totalPages > 1 && (
        <PaginationWrapper>
          <Button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            <ChevronsLeft size={24} strokeWidth={1.5} />
          </Button>
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </Button>
          <PageInfo>
            <PageSpan>Page </PageSpan>
            {`${currentPage} / ${totalPages}`}
          </PageInfo>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </Button>
          <Button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            <ChevronsRight size={24} strokeWidth={1.5} />
          </Button>
        </PaginationWrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: stretch;

  @media ${({ theme }) => theme.queries.tabletAndSmaller} {
    gap: 32px;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media ${({ theme }) => theme.queries.mobileAndSmaller} {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

const PaginationWrapper = styled.div`
  margin-top: 48px;
  padding-bottom: 32px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  @media ${({ theme }) => theme.queries.mobileAndSmaller} {
    justify-content: center;
  }
`;

const Button = styled.button`
  --shadow-color: ${({ theme }) => theme.shadow};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: ${ELEVATIONS.small};

  &[disabled] {
    color: #666;
    box-shadow: none;
    filter: brightness(95%);

    &:hover {
      cursor: revert;
    }
  }
`;

const PageInfo = styled.p`
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.elements};
`;

const PageSpan = styled.span`
  @media ${({ theme }) => theme.queries.mobileAndSmaller} {
    display: none;
  }
`;

export default CountryResultsGrid;
