import React from 'react';

import { ResponsiveSwarmPlot } from '@nivo/swarmplot'

const data = [
    {
        "id": "1",
        "group": "group A",
        "price": 191,
        "volume": 400
    },
    {
        "id": "0.1",
        "group": "group A",
        "price": 445,
        "volume": 14
    },
    {
        "id": "0.2",
        "group": "group A",
        "price": 94,
        "volume": 16
    },
    {
        "id": "0.3",
        "group": "group A",
        "price": 487,
        "volume": 19
    },
    {
        "id": "0.4",
        "group": "group A",
        "price": 497,
        "volume": 9
    },
    {
        "id": "0.5",
        "group": "group A",
        "price": 193,
        "volume": 6
    },
    {
        "id": "0.6",
        "group": "group A",
        "price": 203,
        "volume": 16
    },
    {
        "id": "0.7",
        "group": "group A",
        "price": 48,
        "volume": 15
    },

];


function SwarmPlotChart() {
    return (
        <div>
            <div>
                <h3>SwarmPlot Chart</h3>
            </div>
            <div style={{ height: 500 }}>
                <ResponsiveSwarmPlot
                    layers={['grid', 'nodes', 'mesh', 'annotations']}
                    data={data}
                    groups={['group A']}
                    value="price"
                    valueFormat="$.2f"
                    valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
                    size={{ key: 'volume', values: [4, 20], sizes: [6, 20] }}
                    forceStrength={4}
                    simulationIterations={100}
                    margin={{ top: 30, right: 100, bottom: 80, left: 100 }}
                    motionStiffness={50}
                    motionDamping={10}
                />
            </div>
        </div>
    );
}

export default SwarmPlotChart;
