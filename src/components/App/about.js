import React, {Component, Fragment} from 'react';

  import './App.css';
  
  import "bootstrap/dist/css/bootstrap.css";
  
  
  // Components
  import Navigation from '../Navigation';
  
  class About extends Component {
  
    render() {
      
      return (
  
        <Fragment>
  
        <div className="App">
  
           <Navigation/>
  
          <div class="container">
                <div class="row">
                    <div class="col-12">
                    <div class="text-center">
                    <br>
                    </br>
    

                    <img src={require('./logo.png')} class="img-responsive center-block center" alt="sendit!"/>
                    <div>
                    <p>TODO: Add info about the project and trip</p>

                    </div>
                    
                    </div>     
                    </div>
                </div>
            </div>
  
        </div>
  
        </Fragment>
      );
    }
  }
  
  export default About;