import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const TimelineRecord = ({ record }) => {
  moment.locale('pt-br')
  const formattedDate = record.date
    ? moment(record.date, 'DD/MM').format('D [de] MMMM')
    : null

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
  )
}

TimelineRecord.propTypes = {
  record: PropTypes.object.isRequired,
}

export default TimelineRecord
