import React from 'react';

import { ResponsiveLine } from '@nivo/line'

const data = [
    {
        "id": "japan",
        "color": "hsl(351, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 294
            },
            {
                "x": "helicopter",
                "y": 245
            },
            {
                "x": "boat",
                "y": 71
            },
            {
                "x": "train",
                "y": 63
            },
            {
                "x": "subway",
                "y": 208
            },
            {
                "x": "bus",
                "y": 32
            },
            {
                "x": "car",
                "y": 50
            },
            {
                "x": "moto",
                "y": 89
            },
            {
                "x": "bicycle",
                "y": 110
            },
            {
                "x": "horse",
                "y": 179
            },
            {
                "x": "skateboard",
                "y": 127
            },
            {
                "x": "others",
                "y": 177
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(100, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 13
            },
            {
                "x": "helicopter",
                "y": 227
            },
            {
                "x": "boat",
                "y": 45
            },
            {
                "x": "train",
                "y": 257
            },
            {
                "x": "subway",
                "y": 24
            },
            {
                "x": "bus",
                "y": 201
            },
            {
                "x": "car",
                "y": 217
            },
            {
                "x": "moto",
                "y": 220
            },
            {
                "x": "bicycle",
                "y": 144
            },
            {
                "x": "horse",
                "y": 5
            },
            {
                "x": "skateboard",
                "y": 84
            },
            {
                "x": "others",
                "y": 138
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(92, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 147
            },
            {
                "x": "helicopter",
                "y": 154
            },
            {
                "x": "boat",
                "y": 133
            },
            {
                "x": "train",
                "y": 96
            },
            {
                "x": "subway",
                "y": 192
            },
            {
                "x": "bus",
                "y": 294
            },
            {
                "x": "car",
                "y": 103
            },
            {
                "x": "moto",
                "y": 111
            },
            {
                "x": "bicycle",
                "y": 15
            },
            {
                "x": "horse",
                "y": 239
            },
            {
                "x": "skateboard",
                "y": 145
            },
            {
                "x": "others",
                "y": 5
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(346, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 128
            },
            {
                "x": "helicopter",
                "y": 39
            },
            {
                "x": "boat",
                "y": 229
            },
            {
                "x": "train",
                "y": 91
            },
            {
                "x": "subway",
                "y": 12
            },
            {
                "x": "bus",
                "y": 219
            },
            {
                "x": "car",
                "y": 56
            },
            {
                "x": "moto",
                "y": 135
            },
            {
                "x": "bicycle",
                "y": 210
            },
            {
                "x": "horse",
                "y": 87
            },
            {
                "x": "skateboard",
                "y": 257
            },
            {
                "x": "others",
                "y": 61
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(344, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 178
            },
            {
                "x": "helicopter",
                "y": 250
            },
            {
                "x": "boat",
                "y": 154
            },
            {
                "x": "train",
                "y": 172
            },
            {
                "x": "subway",
                "y": 175
            },
            {
                "x": "bus",
                "y": 287
            },
            {
                "x": "car",
                "y": 259
            },
            {
                "x": "moto",
                "y": 53
            },
            {
                "x": "bicycle",
                "y": 203
            },
            {
                "x": "horse",
                "y": 259
            },
            {
                "x": "skateboard",
                "y": 151
            },
            {
                "x": "others",
                "y": 198
            }
        ]
    }
];


function LineChart() {
    return (
        <div>
            <div>
                <h3>Line Chart</h3>
            </div>
            <div style={{ height: 500 }}>
                <ResponsiveLine
                    data={data}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'transportation',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    colors={{ scheme: 'nivo' }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabel="y"
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </div>
    );
}

export default LineChart;
