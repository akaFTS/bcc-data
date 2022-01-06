import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import worldMap from 'data/students/world.json';
import { citySpecs } from 'data/students/citySpecs';
import { City } from 'types/students';

const kMinRadius = 10;
const kMaxRadius = 30;

function getCityRadius(
  minCount: number,
  maxCount: number,
  count: number,
): number {
  const normalizedCount = (count - minCount) / (maxCount - minCount);
  return normalizedCount * (kMaxRadius - kMinRadius) + kMinRadius;
}

type Props = {
  citiesCount: Map<string, number>;
};

export default function WorldMap({ citiesCount }: Props) {
  const citiesWithCount: (City & { count: number })[] = [];

  citiesCount.forEach((count, cityCode) => {
    const cityData = citySpecs.find((city) => city.code == cityCode);
    if (typeof cityData === 'undefined') return;

    citiesWithCount.push({ ...cityData, count: count });
  });

  const minCount = Math.min(...citiesWithCount.map((entry) => entry.count));
  const maxCount = Math.max(...citiesWithCount.map((entry) => entry.count));

  return (
    <div className="mt4">
      <ComposableMap
        projectionConfig={{
          scale: 205,
          rotate: [-11, 0, 0],
          center: [0, 20],
        }}
        width={980}
        height={551}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        <Geographies geography={worldMap}>
          {({ geographies }) =>
            geographies.map((geography) => (
              <Geography
                key={geography.rsmKey}
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
        {citiesWithCount.map((city) => (
          <Marker key={city.coordinates[0]} coordinates={city.coordinates}>
            <circle
              cx={0}
              cy={0}
              r={getCityRadius(minCount, maxCount, city.count)}
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
