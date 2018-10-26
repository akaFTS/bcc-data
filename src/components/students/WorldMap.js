import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from 'react-simple-maps'
import { scaleLinear } from 'd3-scale'
import citySpecs from './citySpecs'

const wrapperStyles = {
  width: '100%',
  maxWidth: 980,
  margin: '0 auto',
}

class WorldMap extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { cities } = this.props

    const cityBubbles = Object.keys(cities).map(city => ({
      ...citySpecs.find(entry => entry.code === city),
      scale: cities[city] * 100,
    }))

    const values = cityBubbles.map(entry => entry.scale)
    const cityScale = scaleLinear()
      .domain([Math.min(...values), 70])
      .range([10, 30])

    return (
      <div className="mt4">
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11, 0, 0],
          }}
          width={980}
          height={551}
          style={{
            width: '100%',
            height: 'auto',
          }}
        >
          <ZoomableGroup center={[0, 20]} disablePanning>
            <Geographies geography="./world.json">
              {(geographies, projection) =>
                geographies.map((geography, i) => (
                  <Geography
                    key={i}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: '#EEE',
                        stroke: '#888',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                      hover: {
                        fill: '#EEE',
                        stroke: '#888',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#EEE',
                        stroke: '#888',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                    }}
                  />
                ))
              }
            </Geographies>
            <Markers>
              {cityBubbles.map((city, i) => (
                <Marker key={i} marker={city}>
                  <circle
                    cx={0}
                    cy={0}
                    r={cityScale(city.scale)}
                    fill="rgba(159, 168, 218, 0.8)"
                    stroke="#283593"
                    strokeWidth="2"
                  />
                </Marker>
              ))}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

WorldMap.propTypes = {
  cities: PropTypes.object.isRequired,
}

export default WorldMap
