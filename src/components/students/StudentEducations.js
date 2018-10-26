import React from 'react'
import PropTypes from 'prop-types'
import ContentBox from '../shared/ContentBox'
import StudentDataPicker from './StudentDataPicker'
import { Pie } from 'react-chartjs-2'

const StudentEducations = ({ currentSelection, onEpochSelected }) => {
  return (
    <ContentBox title="Nível de Escolaridade" color="blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      >
        {({ education }) => (
          <div className="mt4">
            <Pie
              data={{
                labels: [
                  'Apenas BCC',
                  'Outra Graduação',
                  'MBA ou especialização',
                  'Mestrado',
                  'Doutorado',
                ],
                datasets: [
                  {
                    data: education,
                    backgroundColor: [
                      '#E1BEE7',
                      '#BA68C8',
                      '#9C27B0',
                      '#7B1FA2',
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

StudentEducations.propTypes = {
  currentSelection: PropTypes.number.isRequired,
  onEpochSelected: PropTypes.func.isRequired,
}

export default StudentEducations
