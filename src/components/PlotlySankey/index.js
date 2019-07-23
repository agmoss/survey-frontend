import React from 'react';
import Plot from 'react-plotly.js';

import sankeyData from './data';

class PlotlySankey extends React.Component {

  render() {

    console.log(sankeyData.label);
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
            link: sankeyData.link
          },
        ]}

        layout={{width:1500, height: 700, title: 'Sankey Sample'}}
      />
    );
  }
}

export default PlotlySankey