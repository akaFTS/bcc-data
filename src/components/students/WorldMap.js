import React from 'react';
import PropTypes from 'prop-types';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import citySpecs from '../../data/students/citySpecs';

export default function WorldMap({ cities }) {
  const cityBubbles = Object.keys(cities).map((city) => ({
    ...citySpecs.find((entry) => entry.code === city),
    scale: cities[city] * 100,
  }));

  const values = cityBubbles.map((entry) => entry.scale);
  const cityScale = scaleLinear()
    .domain([Math.min(...values), 70])
    .range([10, 30]);

  return (
    <div className="mt4">
      <ComposableMap
        projectionConfig={{
          scale: 205,
          rotation: [-11, 0, 0],
          center: [0, 20],
        }}
        width={980}
        height={551}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        <Geographies geography="./world.json">
          {({ geographies }) =>
            geographies.map((geography, i) => (
              <Geography
                key={i}
                geography={geography}
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
        {cityBubbles.map((city, i) => (
          <Marker key={i} coordinates={city.coordinates}>
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
      </ComposableMap>
    </div>
  );
}

WorldMap.propTypes = {
  cities: PropTypes.object.isRequired,
};
