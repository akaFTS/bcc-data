import React from 'react';
import PropTypes from 'prop-types';

const TimelineRecord = ({ record }) => {
  let formattedDate = null;
  if (record.date) {
    const [, day, month] = /^(\d{2})\/(\d{2})$/.exec(record.date);
    const date = new Date(2018, month, day); // year is irrelevant
    const monthName = date.toLocaleString('default', { month: 'long' });
    formattedDate = `${date.getDate()} de ${monthName}`;
  }

  return (
    <div className="flex items-stretch">
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
};

TimelineRecord.propTypes = {
  record: PropTypes.object.isRequired,
};

export default TimelineRecord;
