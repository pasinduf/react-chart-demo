import React from 'react';

import './App.css';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';
import SwarmPlot from './charts/SwarmPlotChart'
import ScatterPlot from './charts/ScatterPlotChart'
import Wordcloud from './charts/Wordcloud';
import QuadBubbleChart from './charts/QuadBubbleChart';

function App() {
  return (
    <div className="App">
      <h1>CHARTS</h1>
      <BarChart />
      <LineChart />
      <ScatterPlot />
      <SwarmPlot />
      <Wordcloud />
      <QuadBubbleChart />
    </div >
  );
}

export default App;
