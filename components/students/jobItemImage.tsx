import React from 'react';
import Image from 'next/image';
import { Job } from 'types/students';
import santanderImg from 'public/brands/santander.png';
import totvsImg from 'public/brands/totvs.png';
import ninenineImg from 'public/brands/99.png';
import styles from './jobItemImage.module.css';

type Props = {
  type: Job;
};

function getImageFileFromJob(job: Job): StaticImageData {
  if (job === 'BANK') return santanderImg;
  if (job === 'OLD_TECH') return totvsImg;

  return ninenineImg;
}

function getTextFromJob(job: Job): string {
  if (job === 'BANK') return 'Bancos e Grandes Empresas';
  if (job === 'OLD_TECH') return 'Empresas de Tecnologia Tradicionais';

  return 'Startups Brasileiras';
}

export default function JobItemImage({ type }: Props) {
  const jobImage = getImageFileFromJob(type);

  return (
    <div className={styles.container}>
      <Image
        src={jobImage}
        height={100}
        width={100}
        layout="responsive"
        placeholder="blur"
        alt={`Logotipo - ${getTextFromJob(type)}`}
      />
    </div>
  );
}
