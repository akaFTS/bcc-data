import React from "react";

type Props = {
  title: string;
  color: string;
  children: React.ReactNode;
};

export default function ContentBox({ title, color, children }: Props) {
  return (
    <article>
      <div className="w-100 bg-white br4 pa3">
        <h2 className={`f4 fw6 mt-${color} mb3 mt0`}>{title}</h2>
        {children}
      </div>
      <div
        className={`pv2 bg-mt-light-${color} br--bottom br4 w-90 center mb4`}
      />
    </article>
  );
}
