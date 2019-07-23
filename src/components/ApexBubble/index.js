
import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts'

import bubbleData from './data';

  class ApexBub extends Component {
    
    constructor(props) {
      super(props);

      this.state = {
        options: {
          dataLabels: {
            enabled: false
          },

          fill: {
            opacity: 0.8,
          },
          title: {
            text: 'Simple Bubble Chart'
          },
          xaxis: {
            tickAmount: 12,
            type: 'category',
          },
          yaxis: {
            max: 70
          }
        },
        series: [
          {
            name: 'GBU1',
            data: bubbleData[0]
          },
          {
             name: 'GBU2',
            data: bubbleData[1]
           },
          // {
          //   name: 'GBU3',
          //   data: bubbleData[2]
          // },
          // {
          //   name: 'GBU4',
          //   data:bubbleData[3]
          // }
        ]
      }
    }

    render() {

      return (
        
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bubble" height="700" />
        </div>

      );
    }
  }


  export default ApexBub;