import { Center, Inline } from '@bedrock-layout/primitives';

import { RoundButton } from '../Button';

type PageButtonsType = {
  pageCount: number;
  pageIndex: number;
  goToPage: (page: number) => void;
};

export function PageButtons({
  pageCount,
  pageIndex,
  goToPage,
}: PageButtonsType) {
  const visiblePages = 8;

  const startIndex =
    pageIndex < visiblePages ? 0 : pageIndex - (visiblePages - 1);

  const pageIndexWithinPageCount = startIndex + visiblePages <= pageCount;
  const endIndex = pageIndexWithinPageCount
    ? startIndex + visiblePages
    : pageCount;

  return (
    <Inline>
      {Array.from<number, number>(
        { length: endIndex - startIndex },
        (_, i) => i + startIndex
      ).map((i) => (
        <RoundButton
          active={pageIndex === i}
          onClick={() => goToPage(i)}
          key={i}
        >
          <Center>{i + 1}</Center>
        </RoundButton>
      ))}
    </Inline>
  );
}
