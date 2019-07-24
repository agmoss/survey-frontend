import React from 'react';
import Plot from 'react-plotly.js';

import sankeyData from './data';
import realData from './realData';


class PlotlySankey extends React.Component {

  render() {

    ////console.log(realData.sankey_sample["1"][0]);

    var source= [];
    var target= [];
    var value=  [];
    realData.sankey_sample["1"].forEach(element => {
      source.push(element.source);
      target.push(element.target);
      value.push(element.value);
    });

    var link = 
      {source : source,
      target: target,
    value:value}

    console.log(source);

    return (
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
             label: sankeyData.label,
             color: sankeyData.color
                },
            link: link
          },
        ]}

        layout={{width:1500, height: 700, title: 'Sankey Sample'}}
      />
    );
  }
}

export default PlotlySankey