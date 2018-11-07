import React from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'

const GenderChart = ({ genders }) => {
  const years = Array(genders.accumulatedMales.length)
    .fill(genders.baseYear)
    .map((x, y) => x + y)

  return (
    <Line
      data={{
        labels: years,
        datasets: [
          {
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 0.8)',
            label: 'Mulheres',
            data: genders.accumulatedFemales,
          },
          {
            backgroundColor: 'rgba(54, 162, 235, 0.4)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 0.8)',
            label: 'Homens',
            data: genders.accumulatedMales,
          },
        ],
      }}
      options={{
        scales: {
          xAxes: [{ ticks: { maxTicksLimit: 8 } }],
        },
        labels: ['0', '1', '2'],
      }}
      width={3}
      height={2}
    />
  )
}

GenderChart.propTypes = {
  genders: PropTypes.object.isRequired,
}

export default GenderChart
