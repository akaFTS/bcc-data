import React, { useState } from 'react';
import { Job } from 'types/students';
import JobGroup from './jobGroup';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here");
}

function getHoverLabel(job: Job) {
  if (job === 'PROFESSOR') {
    return 'Professores e Pesquisadores';
  }
  if (job === 'BANK') {
    return 'Bancos e Grandes Empresas';
  }
  if (job === 'CONSULTANT') {
    return 'Consultorias';
  }
  if (job === 'OLD_TECH') {
    return 'Empresas de Tecnologia Tradicionais';
  }
  if (job === 'BIG_TECH') {
    return 'Gigantes da Tecnologia';
  }
  if (job === 'STARTUP') {
    return 'Startups no Exterior';
  }
  if (job === 'BRAZILIAN_STARTUP') {
    return 'Startups Brasileiras';
  }
  if (job === 'OWN') {
    return 'Fundaram a própria empresa';
  }
  if (job === 'GOVERNMENT') {
    return 'Órgãos Públicos';
  }
  if (job === 'RETIRED') {
    return 'Aposentados';
  }
  if (job === 'STUDYING') {
    return 'Ainda estudando';
  }
  if (job === 'OTHER') {
    return 'Outros';
  }
  return assertUnreachable(job);
}

type Props = {
  jobCategories: Map<Job, number>;
};

export default function JobBoard({ jobCategories }: Props) {
  const [hoveringType, setHoveringType] = useState<Job | null>(null);
  const totalJobs = Array.from(jobCategories.values()).reduce(
    (total, jobCount) => total + jobCount,
    0,
  );

  const roundedJobsMap = new Map<Job, number>();
  jobCategories.forEach((count, job) =>
    roundedJobsMap.set(job, Math.round((count * 100) / totalJobs)),
  );

  // Fix last category to always sum 100
  const missingCount = Array.from(roundedJobsMap.values()).reduce(
    (missing, jobCount) => missing - jobCount,
    100,
  );
  const otherCount = roundedJobsMap.get('OTHER') ?? 0;
  roundedJobsMap.set('OTHER', otherCount + missingCount);

  return (
    <>
      <div
        className="mv4 ph4 grid-10"
        onMouseLeave={() => setHoveringType(null)}
      >
        {Array.from(roundedJobsMap).map(([jobType, count]) => (
          <JobGroup
            type={jobType}
            count={count}
            onHover={setHoveringType}
            isHovering={hoveringType === jobType}
            key={jobType}
          />
        ))}
      </div>
      {hoveringType !== null && (
        <div className="flex flex-column items-center mb4">
          <span className="b mt-blue f2">
            {roundedJobsMap.get(hoveringType)}%
          </span>
          <span className="f4 gray tc">{getHoverLabel(hoveringType)}</span>
        </div>
      )}
    </>
  );
}
