import React, {Component, Fragment} from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";

//Containers
//import LineChart from '../../containers/LineChart';
//import DataSquare from '../../containers/DataTable';

// Components
import Navigation from '../Navigation';
import ChartPanel from '../ChartPanel';
import WordCloud from '../WordCloud';

class App extends Component {

  render() {
    
    return (

      <Fragment>

      <div className="App">

         <Navigation/>

        <div className="container-fluid">

          <div className="card-columns d-flex justify-content-center">

            <ChartPanel title = "Negative Sentiment Word Cloud">
              <WordCloud/>
            </ChartPanel>

          </div>

        </div> 

      </div>

      </Fragment>
    );
  }
}

export default App;
