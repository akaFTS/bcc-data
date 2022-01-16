import React from 'react';
import Image from 'next/image';

type Props = {
  color: string;
  name: string;
  image: StaticImageData;
};

export default function ProfessorBubble({ color, name, image }: Props) {
  return (
    <div className={`br-100 ba bw1 b--${color} h2-3 w2-3`}>
      <Image
        className="br-100"
        src={image}
        alt={`Professor(a) ${name}`}
        height={100}
        width={100}
        placeholder="blur"
        layout="responsive"
      />
      <div
        className="absolute white bg-gray z-3 child ph2 pv1 f7 mt1 br-pill tc nowrap"
        style={{ top: '3.1rem' }}
      >
        {name}
      </div>
    </div>
  );
}
