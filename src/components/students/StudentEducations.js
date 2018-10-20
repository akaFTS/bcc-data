import React from 'react'
import ContentBox from '../shared/ContentBox'
import StudentDataPicker from './StudentDataPicker'
import { Pie } from 'react-chartjs-2'

const StudentEducations = () => {
  return (
    <ContentBox title="Nível de Escolaridade" color="blue">
      <StudentDataPicker>
        {({ education }) => (
          <div className="mt4">
            <Pie
              data={{
                labels: [
                  'Apenas BCC',
                  'Outra Graduação',
                  'Mestrado',
                  'Doutorado',
                  'Doutorado no Exterior',
                ],
                datasets: [
                  {
                    data: education,
                    backgroundColor: [
                      '#CE93D8',
                      '#AB47BC',
                      '#8E24AA',
                      '#6A1B9A',
                      '#4A148C',
                    ],
                  },
                ],
              }}
              options={{
                tooltips: {
                  callbacks: {
                    label: function(tooltipItem, data) {
                      var dataset = data.datasets[tooltipItem.datasetIndex]
                      var currentValue = dataset.data[tooltipItem.index]
                      var percentage = Math.floor(currentValue * 100)

                      console.log(tooltipItem)
                      console.log(data)

                      return `${data.labels[tooltipItem.index]}: ${percentage}%`
                    },
                  },
                },
              }}
            />
          </div>
        )}
      </StudentDataPicker>
    </ContentBox>
  )
}

export default StudentEducations
