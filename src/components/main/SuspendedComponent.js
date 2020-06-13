import React, { Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Loader() {
  return (
    <div className="flex flex-column items-center mv6">
      <FontAwesomeIcon spin className="mb3 gray f1" icon={faSpinner} />
      <span className="dark-gray">Carregando...</span>
    </div>
  );
}

export default function SuspendedComponent(component) {
  return <Suspense fallback={<Loader />}>{component}</Suspense>;
}
