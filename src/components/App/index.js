import React, {Component, Fragment} from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";

//Containers
//import LineChart from '../../containers/LineChart';
//import DataSquare from '../../containers/DataTable';

// Components
import NavBar from '../NavBar';
import ChartPanel from '../ChartPanel';
import PlotlySankey from '../PlotlySankey';
import WordCloud from '../WordCloud';
import ApexBubble from '../ApexBubble';

class App extends Component {

  render() {
    
    return (

      <Fragment>

      <div className="App">
        <NavBar title="Survey Dashboard"/>

        <div className="container-fluid">

          <div className="card-columns d-flex justify-content-center">

            <ChartPanel title = "Sankey">
              <PlotlySankey/>
            </ChartPanel>

          </div>

          <div className="card-columns d-flex justify-content-center">

            <ChartPanel title = "Word Cloud">
              <WordCloud/>
            </ChartPanel>

          </div>

          <div className="card-columns d-flex justify-content-center">

            <ChartPanel title = "Bubble">
              <ApexBubble/>
            </ChartPanel>

          </div>

        </div> 

      </div>

      </Fragment>
    );
  }
}

export default App;
