import React from 'react';
import ReactWordcloud from 'react-wordcloud';
//import words from './words';
//import Dropdown from 'react-dropdown'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import realWords from './realWords';

const options = {
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  enableTooltip: true,
  deterministic: false,
  fontFamily: 'impact',
  fontSizes: [15, 45],
  fontStyle: 'normal',
  fontWeight: 'normal',
  // padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 1000,
};

class WordCloud extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      dropdownOpen: false,
      value : "1"
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }

  createCloud(selection){
    return <ReactWordcloud options={options} words={selection} />
  }

  
  render() {

    console.log(realWords[0]["1"]);

    return (
        <div style={{height: 700}}>

            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item onClick={this.select}>1</Dropdown.Item>
              <Dropdown.Item onClick={this.select}>2</Dropdown.Item>
              <Dropdown.Item onClick={this.select}>3</Dropdown.Item>
              <Dropdown.Item onClick={this.select}>4</Dropdown.Item>
            </DropdownButton>

             <ReactWordcloud options={options} words={realWords[0][this.state.value]} /> 
             
         </div>
    );
  }
}

export default WordCloud