import React from 'react';
import { Record } from 'types/course';

type Props = {
  record: Record;
};

export default function TimelineRecord({ record }: Props) {
  let formattedDate: string | null = null;
  if (typeof record.date !== 'undefined') {
    const matches = record.date.matchAll(/^(\d{2})\/(\d{2})$/g).next().value;
    const day = parseInt(matches[0], 10);
    const month = parseInt(matches[1], 10);

    const date = new Date(2018, month, day); // year is irrelevant
    const monthName = date.toLocaleString('pt-BR', { month: 'long' });
    formattedDate = `${date.getDate()} de ${monthName}`;
  }

  return (
    <div className="flex items-stretch" role="listitem">
      <div className="flex flex-column items-center mh4">
        <div className="bl br b--light-gray flex-auto" />
        <div className="h1 w1 bg-mt-purple br-100 mv2" />
        <div className="bl br b--light-gray flex-auto" />
      </div>
      <div className="mv3">
        {formattedDate && (
          <div className="fw6 mid-gray mb1">{formattedDate}</div>
        )}
        <div
          className={`${record.featured ? 'fw6 f4' : 'fw3 lh-copy gray f6'}`}
        >
          {record.text}
        </div>
      </div>
    </div>
  );
}
