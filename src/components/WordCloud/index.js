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
  //deterministic: false,
  fontFamily: 'impact',
  fontSizes: [20, 60],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 5,
  //rotations: 3,
  rotationAngles: [0, 90],
  scale: 'sqrt',
  //spiral: 'archimedean',
  transitionDuration: 1500,
};

class WordCloud extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.selectGbu = this.selectGbu.bind(this);
    this.selectQuestion = this.selectQuestion.bind(this);
    this.state = {
      dropdownOpen: false,
      gbu : "1",
      question : "1"
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  selectGbu(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      gbu: event.target.innerText
    });
  }

  selectQuestion(event){

    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      question: event.target.innerText
    });
  }

  filters(data){

    var filtered = [];
    data[0][this.state.gbu].forEach(element => {
      if(element.question === this.state.question ){
        filtered.push(element);
      }
    });
    return filtered;
  }

  render() {

    return (

      <div>
        <p>GBU: {this.state.gbu} Question: {this.state.question}</p>
        <DropdownButton id="dropdown-basic-button" title="GBU">
              <Dropdown.Item onClick={this.selectGbu}>1</Dropdown.Item>
              <Dropdown.Item onClick={this.selectGbu}>2</Dropdown.Item>
              <Dropdown.Item onClick={this.selectGbu}>3</Dropdown.Item>
              <Dropdown.Item onClick={this.selectGbu}>4</Dropdown.Item>
              <Dropdown.Item onClick={this.selectGbu}>5</Dropdown.Item>
              <Dropdown.Item onClick={this.selectGbu}>6</Dropdown.Item>
              <Dropdown.Item onClick={this.selectGbu}>7</Dropdown.Item>
              <Dropdown.Item onClick={this.selectGbu}>8</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Question">
              <Dropdown.Item onClick={this.selectQuestion}>1</Dropdown.Item>
              <Dropdown.Item onClick={this.selectQuestion}>2</Dropdown.Item>
              <Dropdown.Item onClick={this.selectQuestion}>3</Dropdown.Item>
            </DropdownButton>
        
        <div style={{height: 700}}>

            <ReactWordcloud options={options} words={this.filters(realWords)}/> 
          </div>
        </div>

    );
  }
}

export default WordCloud