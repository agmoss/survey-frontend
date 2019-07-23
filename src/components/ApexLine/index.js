import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts'

import lineData from './data';

class ApexLine extends Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: '-',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: lineData.categories,
            }
        },
        series: [
            {
                name: "Another",
                data: lineData.series1
            },
            {
                name: "Other",
                data: lineData.series2
            }
        ],
      }
    }

    render() {

      return (
        
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="700" />
        </div>

      );
    }
  }


 export default ApexLine;