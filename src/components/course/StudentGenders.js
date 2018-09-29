import React from 'react'
import ContentBox from '../shared/ContentBox'
import { Line } from 'react-chartjs-2'
import maleGraduates from '../../data/course/maleGraduates.json'
import femaleGraduates from '../../data/course/femaleGraduates.json'

const StudentGenders = () => {
  const accumulatedMales = []
  maleGraduates.reduce(
    (prev, curr, i) => (accumulatedMales[i] = prev + curr),
    0
  )

  const accumulatedFemales = []
  femaleGraduates.reduce(
    (prev, curr, i) => (accumulatedFemales[i] = prev + curr),
    0
  )

  const years = Array(44)
    .fill(1974)
    .map((x, y) => x + y)

  return (
    <ContentBox title="Alunos Formados" color="purple">
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
              data: accumulatedFemales,
            },
            {
              backgroundColor: 'rgba(54, 162, 235, 0.4)',
              borderColor: 'rgba(54, 162, 235, 1)',
              pointBackgroundColor: 'rgba(54, 162, 235, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(54, 162, 235, 0.8)',
              label: 'Homens',
              data: accumulatedMales,
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
    </ContentBox>
  )
}

export default StudentGenders
