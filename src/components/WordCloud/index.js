import React from 'react';
import ReactWordcloud from 'react-wordcloud';


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import realWords from './wordData2';

const options = {
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  enableTooltip: true,
  //deterministic: false,
  fontFamily: 'impact',
  fontSizes: [20, 60],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 5,
  rotations: 3,
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
      gbu : "all",
      question : "1",
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


  getUnique(arr, comp) {

    const unique = arr
        .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e]).map(e => arr[e]);

    return unique;
  }

  filters(data){

    var filtered = [];
    data[0][this.state.gbu].forEach(element => {
      if(element.question === this.state.question ){

        if(element.sentiment === "0"){
          filtered.push(element);
        }
        
      }
    });

    return this.getUnique(filtered,"text");
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
              <Dropdown.Item onClick={this.selectGbu}>all</Dropdown.Item>
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