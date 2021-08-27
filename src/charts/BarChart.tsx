import React, { useState } from 'react';

import { ResponsiveBar } from '@nivo/bar'

const data = [
    {
        "country": "DD",
        "hot dog": 195,
        "hot dogColor": "hsl(324, 70%, 50%)",
    },
    {
        "country": "AE",
        "hot dog": 70,
        "hot dogColor": "hsl(220, 70%, 50%)",
        "burger": 198,
        "burgerColor": "hsl(229, 70%, 50%)",
        "sandwich": -16,
        "sandwichColor": "hsl(66, 70%, 50%)",
        "kebab": 141,
        "kebabColor": "hsl(57, 70%, 50%)",
        "fries": 173,
        "friesColor": "hsl(97, 70%, 50%)",
        "donut": 164,
        "donutColor": "hsl(280, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 183,
        "hot dogColor": "hsl(222, 70%, 50%)",
        "burger": 1,
        "burgerColor": "hsl(35, 70%, 50%)",
        "sandwich": 156,
        "sandwichColor": "hsl(4, 70%, 50%)",
        "kebab": 189,
        "kebabColor": "hsl(120, 70%, 50%)",
        "fries": 2,
        "friesColor": "hsl(70, 70%, 50%)",
        "donut": 57,
        "donutColor": "hsl(15, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 164,
        "hot dogColor": "hsl(253, 70%, 50%)",
        "burger": 110,
        "burgerColor": "hsl(216, 70%, 50%)",
        "sandwich": 12,
        "sandwichColor": "hsl(63, 70%, 50%)",
        "kebab": 152,
        "kebabColor": "hsl(110, 70%, 50%)",
        "fries": 99,
        "friesColor": "hsl(78, 70%, 50%)",
        "donut": 32,
        "donutColor": "hsl(140, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 108,
        "hot dogColor": "hsl(65, 70%, 50%)",
        "burger": 22,
        "burgerColor": "hsl(355, 70%, 50%)",
        "sandwich": 103,
        "sandwichColor": "hsl(170, 70%, 50%)",
        "kebab": 12,
        "kebabColor": "hsl(96, 70%, 50%)",
        "fries": 200,
        "friesColor": "hsl(210, 70%, 50%)",
        "donut": 123,
        "donutColor": "hsl(14, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 107,
        "hot dogColor": "hsl(195, 70%, 50%)",
        "burger": 101,
        "burgerColor": "hsl(320, 70%, 50%)",
        "sandwich": 131,
        "sandwichColor": "hsl(157, 70%, 50%)",
        "kebab": 131,
        "kebabColor": "hsl(283, 70%, 50%)",
        "fries": 194,
        "friesColor": "hsl(270, 70%, 50%)",
        "donut": 110,
        "donutColor": "hsl(62, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 22,
        "hot dogColor": "hsl(144, 70%, 50%)",
        "burger": 138,
        "burgerColor": "hsl(195, 70%, 50%)",
        "sandwich": 132,
        "sandwichColor": "hsl(61, 70%, 50%)",
        "kebab": 60,
        "kebabColor": "hsl(74, 70%, 50%)",
        "fries": 22,
        "friesColor": "hsl(92, 70%, 50%)",
        "donut": 119,
        "donutColor": "hsl(342, 70%, 50%)"
    }
];


function BarChart() {
    const [isHorizantal, setIsHorizantal] = useState(false);
    return (
        <div>
            <div>
                <h3>Simple Bar & Stack Chart</h3>
                <button onClick={() => setIsHorizantal(!isHorizantal)}>Change Layout</button>
            </div>
            <div style={{ height: 500 }}>
                <ResponsiveBar
                    margin={{ top: 60, right: 80, bottom: 60, left: 80 }}
                    data={data}
                    indexBy="country"
                    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
                    labelTextColor="inherit:darker(1.4)"
                    layout={isHorizantal ? "horizontal" : "vertical"}
                    enableGridX={true}
                    theme={{
                        axis: {
                            ticks: {
                                line: {
                                    stroke: "green"
                                },
                                text: {
                                    fill: "red"
                                }
                            }
                        },
                        grid: {
                            line: {
                                stroke: "pink",
                                strokeWidth: 2,
                                strokeDasharray: "4 4"
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default BarChart;
