import React from 'react';
import Image from 'next/image';
import styles from './professorBubble.module.css';

type Props = {
  color: string;
  name: string;
  image: StaticImageData;
  flippedProps: any;
};

export default function ProfessorBubble({
  color,
  name,
  image,
  flippedProps,
}: Props) {
  return (
    <div className={styles.bubbleWrap} {...flippedProps}>
      <div className={styles.bubble} style={{ borderColor: `var(--${color})` }}>
        <Image
          src={image}
          alt={`Professor(a) ${name}`}
          height={100}
          width={100}
          placeholder="blur"
          layout="responsive"
        />
      </div>
      <div className={styles.subtitleWrap}>
        <div className={styles.subtitle}>{name}</div>
      </div>
    </div>
  );
}
