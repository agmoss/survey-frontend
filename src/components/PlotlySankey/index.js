import React from 'react';
import Plot from 'react-plotly.js';
import sankeyData from './sankeyData';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


class PlotlySankey extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.selectGbu = this.selectGbu.bind(this);
    this.selectQuestion = this.selectQuestion.bind(this);
    this.state = {
      dropdownOpen: false,
      gbu : "1",
      question : 1,
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
      question: parseInt(event.target.innerText)
    });
  }

  filters(data){

    var filtered = [];
    data[this.state.gbu].forEach(element => {
      if(element.question === this.state.question){
        filtered.push(element);
      }
    });

    return filtered;

  }

  render() {

    var labels = ['Culture','Communication','Leadership','Change','Management',
    'Transparency','Team','People','Good', 'Neutral','Bad'];

    var source= [];
    var target= [];
    var value=  [];

    var filt = this.filters(sankeyData)

    filt.forEach(element => {

      source.push(element.source -2);
      target.push(element.target -2);
      value.push(element.value);
    });

    var link = 
      {
        source : source,
        target: target,
        value : value
      }

    return (

      <div>

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
            <Dropdown.Item onClick={this.selectQuestion}>3</Dropdown.Item>
          </DropdownButton>

        </div>

      <div>

        <Plot
        
          data={[
            {
              type: "sankey",
              orientation: "h",
              node: {
                pad: 15,
                thickness: 30,
                line: {
                  color: "black",
                  width: 0.5
                },
              label: labels,
                  },
              link: link
            },
            
          ]}
          layout={{width:1500, height: 700, title: 'Sankey'}}

        />
        </div>
      </div>
    );
  }
}

export default PlotlySankey