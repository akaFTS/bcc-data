import React from 'react';
import { Job } from 'types/students';

type Props = {
  type: Job;
};

export default function JobItemImage({ type }: Props) {
  const jobFilename =
    type == 'BANK' ? 'santander' : type == 'OLD_TECH' ? 'totvs' : '99';

  return (
    <img
      src={`/brands/${jobFilename}.png`}
      style={{ height: '1.4rem' }}
      alt={`Logotipo - ${jobFilename}`}
    />
  );
}
