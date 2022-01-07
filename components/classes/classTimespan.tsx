import React from 'react';

function getBeginYearColor(beginYear: number): string {
  if (beginYear < 1982) return 'moon-gray';
  if (beginYear < 1998) return 'light-silver';
  if (beginYear < 2010) return 'gray';
  return 'dark-gray';
}

function getEndYearColor(endYear: number): string {
  if (endYear < 1982) return 'washed-red';
  if (endYear < 1998) return 'light-red';
  if (endYear < 2010) return 'red';
  return 'dark-red';
}

type Props = {
  beginYear: number;
  endYear: number;
};

export default function ClassTimespan({ beginYear, endYear }: Props) {
  const beginYearColor = getBeginYearColor(beginYear);
  const endYearColor = getEndYearColor(endYear);

  return (
    <div className="flex mt3 mt0-l" aria-hidden="true">
      <div className="visually-hidden">
        De {beginYear} até {endYear}.
      </div>
      <div className={`white br--left br2 pl2 pv1 f5 b bg-${beginYearColor}`}>
        {beginYear}
      </div>
      <div
        className={`white br--right br2 pl2 pr2 pv1 f5 b relative bg-${endYearColor}`}
      >
        <div
          className={`bl triangle absolute left-0 top-0 h-100 b--${beginYearColor}`}
        />
        {endYear}
      </div>
    </div>
  );
}
