import React from 'react';
import './App.css';
import { Doughnut } from 'react-chartjs-2'

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [1],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#AFCE56',
      '#FFCEA6',
      '#FAAE56'

    ],
    hoverBackgroundColor: [
      '#FF6387',
      '#36A2EC',
      '#FFCE58'
    ]
  }]
};


function App() {
  return (
    <div className="App">
      <Doughnut data={data} />
    </div>
  );
}

export default App;
