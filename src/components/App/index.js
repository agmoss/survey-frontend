import React, {Component, Fragment} from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";

//Containers
import LineChart from '../../containers/LineChart';
import DataSquare from '../../containers/DataTable';

// Components
import NavBar from '../NavBar';
import ChartPanel from '../ChartPanel';
import DataPanel from '../DataPanel';
import withSplashScreen from '../withSplashScreen';
import PlotlySample from '../PlotlySample';
import PlotlySankey from '../PlotlySankey';
import Sankey from '../Sankey';
import WordCloud from '../WordCloud';

class App extends Component {

  render() {
    
    return (

      <Fragment>

      <div className="App">
        <NavBar title="Survey Dashboard"/>

        <div className="container">

          <div className="card-columns d-flex justify-content-center">


            <ChartPanel title = "Sankey">
              <PlotlySankey/>
            </ChartPanel>

            <ChartPanel title = "Word Cloud">
              <WordCloud/>
            </ChartPanel>

            {/* <DataPanel title = "Recent Entries">
              <DataSquare {...this.props}/>
            </DataPanel> */}

            {/* <ChartPanel title = "PlotlySAMPLE">
              <PlotlySample/>
            </ChartPanel> */}

          </div>

        </div> 

      </div>

      </Fragment>
    );
  }
}

export default withSplashScreen(App);
