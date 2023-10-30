import { Center, Inline } from '@bedrock-layout/primitives';
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { RoundButton } from '../Button';
import { PageButtons } from './PageButtons';

export type PaginationProps = {
  canPreviousPage: boolean;
  nextPage: () => void;
  previousPage: () => void;
  canNextPage: boolean;
  pageCount: number;
  pageIndex: number;
  goToPage: (num: number) => void;
};

export function Pagination({
  canPreviousPage,
  nextPage,
  canNextPage,
  previousPage,
  pageIndex,
  pageCount,
  goToPage,
}: PaginationProps) {
  return (
    <Inline align="center" gutter={3}>
      {pageCount > 1 && (
        <>
          <RoundButton
            onClick={() => goToPage(0)}
            disabled={!canPreviousPage && pageIndex === 0}
          >
            <Center centerChildren>
              <BiChevronsLeft />
            </Center>
          </RoundButton>

          <RoundButton
            onClick={previousPage}
            disabled={!canPreviousPage && pageIndex === 0}
          >
            <Center centerChildren>
              <BsChevronLeft />
            </Center>
          </RoundButton>
        </>
      )}
      {pageCount > 1 && (
        <PageButtons
          goToPage={goToPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
        />
      )}

      {pageCount > 1 && pageIndex <= pageCount - 1 && (
        <>
          <RoundButton
            onClick={nextPage}
            disabled={!canNextPage || pageIndex === pageCount - 1}
          >
            <Center centerChildren>
              <BsChevronRight />
            </Center>
          </RoundButton>

          <RoundButton
            onClick={() => goToPage(pageCount - 1)}
            disabled={!canNextPage || pageIndex === pageCount - 1}
          >
            <Center centerChildren>
              <BiChevronsRight />
            </Center>
          </RoundButton>
        </>
      )}
    </Inline>
  );
}
