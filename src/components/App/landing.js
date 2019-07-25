import React, {Component, Fragment} from 'react';

  import './App.css';
  
  import "bootstrap/dist/css/bootstrap.css";
  
  
  // Components
  import Navigation from '../Navigation';
  
  class Landing extends Component {
  
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
                    </div>     
                    </div>
                </div>
            </div>
  
        </div>
  
        </Fragment>
      );
    }
  }
  
  export default Landing;