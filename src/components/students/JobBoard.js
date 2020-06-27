import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Job from './Job';
import { StudentJobTypes } from '../../data/students/studentDefinitions';

export default function JobBoard({ jobCategories }) {
  const [hoveringType, setHoveringType] = useState(null);

  const roundedJobs = jobCategories.map((job) => Math.round(job * 100));

  // Fix last category to always sum 100
  roundedJobs[StudentJobTypes.OTHER] +=
    100 - roundedJobs.reduce((acc, cur) => acc + cur, 0);

  const jobVector = roundedJobs.reduce(
    (acc, cur, index) => [...acc, ...Array(cur).fill(index)],
    []
  );

  const hoverLabels = [
    'Professores e Pesquisadores',
    'Bancos e Grandes Empresas',
    'Consultorias',
    'Empresas de Tecnologia Tradicionais',
    'Gigantes da Tecnologia',
    'Startups no Exterior',
    'Startups Brasileiras',
    'Fundaram a própria empresa',
    'Órgãos Públicos',
    'Aposentados',
    'Ainda estudando',
    'Outros',
  ];

  return (
    <>
      <div
        className="mv4 ph4 grid-10"
        onMouseLeave={() => setHoveringType(null)}
      >
        {jobVector.map((jobType, index) => (
          <Job
            type={jobType}
            onHover={setHoveringType}
            isHovering={hoveringType === jobType}
            // eslint-disable-next-line
            key={`${jobType}-${index}`}
          />
        ))}
      </div>
      {hoveringType !== null && (
        <div className="flex flex-column items-center mb4">
          <span className="b mt-blue f2">{roundedJobs[hoveringType]}%</span>
          <span className="f4 gray tc">{hoverLabels[hoveringType]}</span>
        </div>
      )}
    </>
  );
}

JobBoard.propTypes = {
  jobCategories: PropTypes.array.isRequired,
};
